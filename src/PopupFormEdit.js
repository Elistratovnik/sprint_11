import PopupForm from "./PopupForm";

export default class PopupFormEdit extends PopupForm {
  constructor(popup, closeButton, openButton, resetError, resetInput, setSubmitButtonState, setFormUserData) {
    super(popup, closeButton, openButton, resetError, resetInput, setSubmitButtonState);
    this.setFormUserData = setFormUserData;
    this.setEventListenersEdit();
  }

  setEventListenersEdit() {
    this.openButton.addEventListener('click', () => {
      this.setSubmitButtonState();
      this.setFormUserData();
    })
  }
}
