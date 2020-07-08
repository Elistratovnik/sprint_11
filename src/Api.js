/*
  Можно лучше: для ендпоинта карточек сделать отдельный класс Api где будут
  прописаный ендпоинты запросов, т.к. по заданию можно так же рализовать
  лайки и удаление карточек
*/

class Api {
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
