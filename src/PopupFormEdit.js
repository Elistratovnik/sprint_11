import PopupForm from "./PopupForm";

export default class PopupFormEdit extends PopupForm {
  constructor(popup, closeButton, openButton, resetError, resetInput, setSubmitButtonState) {
    super(popup, closeButton, openButton, resetError, resetInput, setSubmitButtonState);
    this.setEventListenersEdit();
  }

  setEventListenersEdit() {
    this.openButton.addEventListener('click', () => {
      this.setSubmitButtonState();
    })
  }
}
