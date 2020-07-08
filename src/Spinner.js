class Spinner {
  constructor(spinnerContainer) {
    this.spinnerContainer = spinnerContainer;
  }
  spinnerVisible = (isLoading) => {
    if (isLoading) {
      this.spinnerContainer.classList.add('spinner_visible')
    } else {
      this.spinnerContainer.classList.remove('spinner_visible')
    }
  }
}
