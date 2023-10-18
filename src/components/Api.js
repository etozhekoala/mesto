export default class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards/`, {
      headers: this._headers,
      method: 'GET',
    })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Pronise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }

  deleteCard(id) {

  }

  addCard() {

  }
}

