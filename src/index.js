import './pages/index.css'

console.log('test2');

// (function () {
//   const cardApi = new Api ({
//     baseUrl: 'https://praktikum.tk/cohort11/cards',
//     headers: {
//       authorization: '7420c4f4-1dc1-4739-8493-b258cc0d7abf'
//     }
//   });

//   const userApi = new ApiUser({
//     baseUrl: 'https://praktikum.tk/cohort11/users/me',
//     method: 'PATCH',
//     headers: {
//       authorization: '7420c4f4-1dc1-4739-8493-b258cc0d7abf',
//       'Content-Type': 'application/json'
//     }
//   });

//   const spinner = new Spinner(document.querySelector('.spinner'));
//   const form = document.forms.new;
//   const formEdit = document.forms.edit;
//   const formAva = document.forms.ava;
//   const avatar = document.querySelector('.user-info__photo');
//   const errorMessages = {
//     valueMissing: 'Это обязательное поле',
//     tooShort: 'Должно быть от 2 до 30 символов',
//     typeMismatch: 'Здесь должна быть ссылка'
//   }
//   const addFormValidator = new FormValidator(form, errorMessages);
//   const editFormValidator = new FormValidator(formEdit, errorMessages);
//   const avaFormValidator = new FormValidator(formAva, errorMessages);

//   const openAddFormButton = document.querySelector('.user-info__button');
//   const closeAddFormButton = document.querySelector('.popup__close_add');
//   const popupAdd = new PopupForm(document.querySelector('.popup_add'), closeAddFormButton, openAddFormButton, addFormValidator.resetError, addFormValidator.resetInput, addFormValidator.setSubmitButtonState);

//   const closeAvaFormButton = document.querySelector('.popup__close_avatar');
//   const popupAva = new PopupForm(document.querySelector('.popup_avatar'), closeAvaFormButton, avatar, avaFormValidator.resetError, avaFormValidator.resetInput, avaFormValidator.setSubmitButtonState);

//   const openEditFormButton = document.querySelector('.button_edit');
//   const closeEditFormButton = document.querySelector('.popup__close_edit');
//   const popupEdit = new PopupFormEdit(document.querySelector('.popup_edit'), closeEditFormButton, openEditFormButton, editFormValidator.resetError, editFormValidator.resetInput, editFormValidator.setSubmitButtonState);

//   const closeImgbutton = document.querySelector('.popup__close_img');
//   const popupImg = new PopupImg(document.querySelector('.popup_img-container'), closeImgbutton);

//   const userInfo = new UserInfo(document.querySelector('.user-info__name'), document.querySelector('.user-info__job'), formEdit.elements.userName, formEdit.elements.about, avatar, userApi, spinner.spinnerVisible, popupEdit.close);

//   const cardTemplate = document.querySelector('#card').content;
//   const createCardItem = (...arg) => new Card(...arg);
//   const placesList = new CardList(document.querySelector('.places-list'), cardApi, createCardItem, cardTemplate, popupImg.openBigPic, spinner.spinnerVisible);

//   function addCardForm(event) {
//     event.preventDefault();
//     const userText = {
//       name: form.elements.name.value,
//       link: form.elements.link.value
//     }
//     placesList.addCard(userText);
//     popupAdd.close();
//     form.reset();
//   }

//   function editName(event) {
//     event.preventDefault();
//     userInfo.setUserInfo(formEdit.elements.userName.value, formEdit.elements.about.value);
//   }

//   function updateAvatar(event) {
//     event.preventDefault();
//     spinner.spinnerVisible(true);
//     userApi.editAvatar(formAva.elements.userAva.value)
//       .then((res) => {
//         userInfo.updateUserAvatar(res.avatar);
//         popupAva.close();
//         formAva.reset();
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         spinner.spinnerVisible(false);
//       });

//   }

//   form.addEventListener('submit', addCardForm);
//   formEdit.addEventListener('submit', editName);
//   formAva.addEventListener('submit', updateAvatar);

//   placesList.render();
// })();


