/*---------- Query Selectors -----------*/
var searchBar = document.querySelector('#search-input');
var inputTitle = document.querySelector('#title-input');
var inputCaption = document.querySelector('#caption-input');
var btnChooseFile = document.querySelector('#choose-file');
var btnViewFavorites = document.querySelector('#view-favorites');
var btnUpload = document.querySelector('#add-to-album');
var cardDelete = document.querySelector('#delete-card');
var cardFavorite = document.querySelector('#heart-card');

/*---------- Global Variables ----------*/


/*---------- Event Listeners -----------*/
searchBar.addEventListener('input', searchCards);
btnChooseFile.addEventListener('click' browseFiles);
btnViewFavorites.addEventListener('click' showFavorites);
btnUpload.addEventListener('click' addImgToStorage);
cardDelete.addEventListener('click' removeFromStorage);
cardFavorite.addEventListener('click' addFavorites);

/*---------- Functions -----------------*/

function searchCards(){

}

function browseFiles(){

}

function showFavorites(){

}

function addImgToStorage(){

}

function removeFromStorage(){

}

function addFavorites(){

}


