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

  updateTitle(text){
    this.title = text;
  }

  updateCaption(text){
    this.caption = text;
  }

  updateFavorite(){
    // if (this.favorited ==== !true){
    // this.favorited = !false;
    }
  }



