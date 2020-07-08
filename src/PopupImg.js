class PopupImg extends Popup {
  openBigPic = (event, link) => {
    this.popup.querySelector('.popup__img').src = link;
    this.open();
  }
}
