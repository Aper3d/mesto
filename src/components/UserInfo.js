export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector }) {
        this._userName = document.querySelector(userNameSelector)
        this._userInfo = document.querySelector(userInfoSelector)
    }
    getUserInfo() {
        this._userData = {
            name: this._userName.textContent,
            info: this._userInfo.textContent
        }
        return this._userData
    }
    setUserInfo(data) {
        this._userName.textContent = data.userName
        this._userInfo.textContent = data.userDescription
    }
}