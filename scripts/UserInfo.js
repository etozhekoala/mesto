export default class UserInfo {
  constructor({editProfileNameInput, editProfileJobInput}) {
    this._editProfileNameInput = document.querySelector(editProfileNameInput);
    this._editProfileJobInput = document.querySelector(editProfileJobInput);
  }
  
  getUserInfo() {
    return {
      name: this._editProfileNameInput.textContent,
      job: this._editProfileJobInput.textContent
    }
  } 

  setUserInfo(name, job) {
    this._editProfileNameInput.textContent = name;
    this._editProfileJobInput.textContent = job;
  }
}