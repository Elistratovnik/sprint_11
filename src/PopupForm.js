import Popup from "./Popup";

export default class PopupForm extends Popup {
  constructor(popup, closeButton, openButton, resetError, resetInput, setSubmitButtonState) {
    super(popup, closeButton);
    this.openButton = openButton;
    this.resetError = resetError;
    this.resetInput = resetInput;
    this.setSubmitButtonState = setSubmitButtonState;
    this.setEventListenersForm();
  }

  setEventListenersForm() {
    this.openButton.addEventListener('click', () => {
      this.open();
      this.resetError();
      this.setSubmitButtonState();
    });
    this.closeButton.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup__close_add')) this.resetInput()
    })
  }
}
