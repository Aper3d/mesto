export default class UserInfo {
    constructor({ name, info }) {
        this._userName = document.querySelector(name)
        this._userInfo = document.querySelector(info)
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