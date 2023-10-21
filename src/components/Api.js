export default class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'GET',
    })

    .then(this._handleResponse)
  }

  getUserProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'GET',
    })

    .then(this._handleResponse)
  } 

  editUserProfile(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({name: data.name, about: data.about})
    })

    .then(this._handleResponse)
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({name: data.name, link: data.link})
    })

    .then(this._handleResponse)
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })

    .then(this._handleResponse)
  }

  removeLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
        headers: this._headers,
        method: 'DELETE'
    })
    
    .then(this._handleResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
        headers: this._headers,
        method: 'DELETE'
    })
    
    .then(this._handleResponse)
  }

  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({avatar: data.linkPicture})
    })

    .then(this._handleResponse)
  }
}