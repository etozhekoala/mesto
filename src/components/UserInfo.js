export default class UserInfo {
  constructor({nameInputSelector , jobInputSelector}) {
    this._nameInputSelector = document.querySelector(nameInputSelector);
    this._jobInputSelector = document.querySelector(jobInputSelector);
  }
  
  getUserInfo() {
    return {
      name: this._nameInputSelector.textContent,
      about: this._jobInputSelector.textContent
    }
  } 

  setUserInfo(data) {
    this._nameInputSelector.textContent = data.name;
    this._jobInputSelector.textContent = data.about;
  }
}