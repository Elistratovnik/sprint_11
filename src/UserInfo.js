export default class UserInfo {
  constructor(nameContainer, aboutContainer, inputName, inputAbout, avatarContainer, userApi, spinnerVisible, popupEditClose) {
    this.userApi = userApi;
    this.popupEditClose = popupEditClose;
    this.spinnerVisible = spinnerVisible;
    this.nameContainer = nameContainer;
    this.aboutContainer = aboutContainer;
    this.avatarContainer = avatarContainer;
    this.inputName = inputName;
    this.inputAbout = inputAbout;
    this.getData();
  }

  getData = () => {
    this.userApi.getData()
      .then(res => {
        this.name = res.name;
        this.about = res.about;
        this.avatar = res.avatar;
        this.updateUserInfo();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  setUserInfo(newName, newAbout) {
    this.spinnerVisible(true);
    this.userApi.editProfile(newName, newAbout)
      .then(() => {
        this.name = newName;
        this.about = newAbout;
        this.updateUserInfo();
        this.popupEditClose();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.spinnerVisible(false));
  }

  updateUserInfo() {
    this.nameContainer.textContent = this.name;
    this.aboutContainer.textContent = this.about;
    this.avatarContainer.style.backgroundImage = `url('${this.avatar}')`;
  }

  updateUserAvatar = (link) => {
    this.avatar = link
    this.avatarContainer.style.backgroundImage = `url('${link}')`;
  }

  setFormUserData = () => {
    this.inputName.value = this.name;
    this.inputAbout.value = this.about;
  }
}
