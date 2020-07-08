class FormValidator {
  constructor(form, errorMessages) {
    this.form = form;
    this.errorMessages = errorMessages;
    this.setEventListeners();
  }

  checkInputValidity(input) {
    if (input.validity.valueMissing) {
      return { isValid: false, error: this.errorMessages.valueMissing };
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      return { isValid: false, error: this.errorMessages.tooShort };
    }
    if (input.validity.typeMismatch && input.type === 'url') {
      return { isValid: false, error: this.errorMessages.typeMismatch };
    }
    return { isValid: true, error: '' };
  }

  errorMessage = (event) => {
    const errorElement = this.form.querySelector(`.popup__error_${event.target.name}`);
    errorElement.textContent = this.checkInputValidity(event.target).error;
  }

  setSubmitButtonState = () => {
    if (this.form.checkValidity()) {
      this.button.removeAttribute('disabled');
      this.button.classList.add('button_active');
    } else {
      this.button.setAttribute('disabled', '')
      this.button.classList.remove('button_active');
    }
  }

  setEventListeners() {
    this.button = this.form.querySelector('.popup__button');
    this.inputs = Array.from(this.form.querySelectorAll('.popup__input'));

    this.inputs.forEach((input) => {
      input.addEventListener('input', this.errorMessage);
      input.addEventListener('input', this.setSubmitButtonState);
    });
  }
  resetInput = () => {
    this.form.reset();
  }

  resetError = () => {
    const errors = Array.from(this.form.querySelectorAll('.popup__error'));
    errors.forEach((span) => span.textContent = '');
  }

}
