import Api from "./Api"

export default class ApiUser extends Api {
  editProfile (name, about) {
    return fetch(this.url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(res => this._getResponseData(res))
  }
  editAvatar = (link) => {
    return fetch(`${this.url}/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => this._getResponseData(res))
  }
}
