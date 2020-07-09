export default class Api {
  constructor(data) {
    this.url = data.baseUrl;
    this.headers = data.headers;
  }

  _getResponseData (res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
    }

  getData () {
    return fetch(this.url, {headers: this.headers})
      .then(res => this._getResponseData(res))
  }
}
