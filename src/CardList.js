export default class CardList {
  constructor(container, cardsApi, createCardItem, cardTemplate, openBigPic, spinnerActivate) {
    this.spinnerActivate = spinnerActivate;
    this.container = container;
    this.cardTemplate = cardTemplate;
    this.cardsApi = cardsApi;
    this.createCardItem = createCardItem;
    this.openBigPic = openBigPic;
  }

  addCard({ name, link }) {
    const card = this.createCardItem({ name, link }, this.cardTemplate, this.openBigPic);
    this.container.appendChild(card.createCard());
    card.setEventListeners();
  }

  render() {
    this.spinnerActivate(true);
    this.cardsApi.getData()
      .then(res => res.slice(0, 100).forEach((item) => this.addCard(item)))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.spinnerActivate(false))
  }
}
