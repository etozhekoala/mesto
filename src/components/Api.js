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

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({name: data.name, link: data.link})
    })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }

  removeLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
        headers: this._headers,
        method: 'DELETE'
    })
    
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
        headers: this._headers,
        method: 'DELETE'
    })
    
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }

  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({avatar: data.linkPicture})
    })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`)
      }
    })
  }
}