/*---------- Query Selectors -----------*/
var searchBar = document.querySelector('#search-input');
var inputTitle = document.querySelector('#title-input');
var inputCaption = document.querySelector('#caption-input');
var btnChooseFile = document.querySelector('#choose-file');
var btnViewFavorites = document.querySelector('#view-favorites');
var btnUpload = document.querySelector('#add-to-album');
var cardDelete = document.querySelector('.delete-card');
var cardFavorite = document.querySelector('.heart-card');
var cardArea = document.querySelector('.article-wrapper');

/*---------- Global Variables ----------*/


/*---------- Event Listeners -----------*/
searchBar.addEventListener('input', searchCards);
btnChooseFile.addEventListener('click', browseFiles);
btnViewFavorites.addEventListener('click',showFavorites);
btnUpload.addEventListener('click',addImgToStorage);
cardDelete.addEventListener('click', removeFotoCard);
cardFavorite.addEventListener('click', addFavorites);

/*---------- Functions -----------------*/
function getFotos(){
  var fotoString = localStorage.ideas || '[}';
  return JSON.parse(fotoString);
}

function addFotoCard(foto){
  var fotoClone = fotoTemplate.conent.cloneNode(true);
  addFotoData (fotoClone, foto);
  addFotoListeners(ideaClone);
  //function to add foto data
  //function to add foto listeners
  fotoArea.insertBefore(fotoClone, fotoArea.firstChild);
  inputTitle.value = '';
  inputCaption.value = '';
}

function addFotoData(clone, foto){
  var favorite = [true, false];
  clone.querySelector('section').dataset.id = foto.id;
  clone.querySelector('.img-title').innerText = idea.title;
  // add card image data  clone.querySelector('.card-image')
  clone.querySelector('img-caption').innerText = foto.caption;
  // add favorite persistence  clone.querySelector('foto-')

}

function getFotoIndex(e, fotos){
  var parent = e.target.closest('section');
  var parentID = pareseInt(parent.dataset.id);
  var index = fotos.findIndex(foto => idea.id === parentID);
  return index;
}

function reinstateCard(fotos, i){
  return new Foto(fotos[i].id, fotos[i].title, /*fotos[i]foto image,*/ fotos[i].caption /*fotos[i].favorited*/);
}

function searchCards(){
  var searchQuery = searchBar.value.toLowerCase();
  var fotos = getFotos();
  var searchResults = fotos.filter(foto => foto.title.toLowerCase().includes(searchQuery)|| foto.caption.toLowerCase().includes(searchQuery));
  cardArea.innerHTML = '';
  searchResults.forEach(foto => addFotoCard(foto));
  //
  
}

function createFotoCard(e){
  e.preventDefault();
  var fotos = getFotos();
  var newFoto = new Photo(Date.now(), inputTitle.value, /*uploaded photo,*/ inputCaption.value);
  newFoto.saveToStorage(fotos);
  storeFotos(fotos)
  displayFotos();
}

function addCardListeners(clone){
  clone.querySelector('.delete-card')
}

function browseFiles(){

}

function showFavorites(){
 // var favorite =
}

function addImgToStorage(fotos){
  localStorage.fotos = JSON.stringify(fotos);
}

function removeFotoCard(e){
  e.target.closest('section').remove();
  var fotos = getFotos();
  var i = getFotoIndex(e, fotos);
  var fotoToDelete.deleteFromStorage
}



function addFavorites(){

}


