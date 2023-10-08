export default class UserInfo {
  constructor({nameInputSelector , jobInputSelector}) {
    this._nameInputSelector = document.querySelector(nameInputSelector);
    this._jobInputSelector = document.querySelector(jobInputSelector);
  }
  
  getUserInfo() {
    return {
      name: this._nameInputSelector.textContent,
      job: this._jobInputSelector.textContent
    }
  } 

  setUserInfo(name, job) {
    this._nameInputSelector.textContent = name;
    this._jobInputSelector.textContent = job;
  }
}