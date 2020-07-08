class Card {
  constructor({ name, link }, template, openBigPic) {
    this.template = template;
    this.name = name;
    this.link = link;
    this.openBigPic = openBigPic;
  }

  createCard() {
    this.card = this.template.cloneNode(true).querySelector('.place-card');
    this.likeIcon = this.card.querySelector('.place-card__like-icon');
    this.deleteIcon = this.card.querySelector('.place-card__delete-icon');
    this.cardImage = this.card.querySelector('.place-card__image');
    this.cardImage.setAttribute('data-link', `${this.link}`);
    this.cardImage.style.backgroundImage = `url('${this.link}')`;
    this.card.querySelector('.place-card__name').setAttribute('data-name', `${this.name}`);
    this.card.querySelector('.place-card__name').textContent = this.name;
    return this.card;
  }

  setEventListeners() {
    this.likeIcon.addEventListener('click', this.like);
    this.deleteIcon.addEventListener('click', this.remove);
    this.cardImage.addEventListener('click', this.zoom);
  }

  removeEventListener() {
    this.likeIcon.removeEventListener('click', this.like);
    this.deleteIcon.removeEventListener('click', this.remove);
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove = (event) => {
    this.removeEventListener();
    this.card.remove();
    event.stopPropagation();
  }
  zoom = (event) => {
    this.openBigPic(event, this.link);
  }
}
