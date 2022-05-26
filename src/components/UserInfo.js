export default class UserInfo {
    constructor(userSelectors) {
        this._userName = document.querySelector(userSelectors.name)
        this._userDescription = document.querySelector(userSelectors.description)
        this._userAvatar = document.querySelector(userSelectors.avatar)
    }

    getUserInfo() {
        this._userData = {
            name: this._userName.textContent,
            info: this._userDescription.textContent
        }
        return this._userData
    }

    setUserInfo(data) {
        this._userName.textContent = data.name
        this._userDescription.textContent = data.about
        this.setUserAvatar(data)
    }

    setUserAvatar(data) {
        this._userAvatar.src = data.avatar
    }
}