export default class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'GET',
    })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }

  getUserProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'GET',
    })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  } 

  editUserProfile(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({name: data.name, about: data.about})
    })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }

  addCard({name}) {
    return fetch(`${this._url}/cards/`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({name})
    })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }

  deleteCard(id) {

  }
}

