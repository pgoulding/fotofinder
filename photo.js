class Photo{
  constructor(id, title, file, caption){
    this.id = id;
    this.title = title;
    this.file = file;
    this.caption = caption;
    this.favorited = false;
  }

  saveToStorage(photos){
    photos.push(this)
  }

  updateTitle(){

  }

  updateCaption(){

  }

  updateFavorite(){

  }

  isLoved(){
    if (this.favorited < 1){
      this.favorited++;
    }
  }

  notLoved(){
    if(this.favorited > 0){
      this.favorited--;
    }
  }

  deletePhoto(){

  }

}