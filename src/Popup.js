class Popup {
  constructor(popup, closeButton) {
    this.popup = popup;
    this.closeButton = closeButton;
    this.setEventListeners();
  }

  setEventListeners() {
    this.closeButton.addEventListener('click', this.close);
  }

  open = () => {
    this.popup.classList.add('popup_is-opened');
  }

  close = () => {
    this.popup.classList.remove('popup_is-opened');
  }
}

