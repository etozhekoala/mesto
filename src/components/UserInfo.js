export default class UserInfo {
  constructor({nameInputSelector, jobInputSelector, avatarSelector}) {
    this._nameInputSelector = document.querySelector(nameInputSelector);
    this._jobInputSelector = document.querySelector(jobInputSelector);
    this._avatarSelector = document.querySelector(avatarSelector)
  } 
  
  getUserInfo() {
    return {
      name: this._nameInputSelector.textContent,
      about: this._jobInputSelector.textContent,
    }
  } 

  setUserInfo(data) {
    this._nameInputSelector.textContent = data.name;
    this._jobInputSelector.textContent = data.about;
    this._avatarSelector.src = data.avatar;
  } 
}