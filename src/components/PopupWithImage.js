import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupImg = this._popup.querySelector('.popup__image')
        this._popupCaption = this._popup.querySelector('.popup__caption')
    }
    openPopup(img) {
        super.openPopup()
        this._popupImg.src = img.link
        this._popupImg.alt = img.name
        this._popupCaption.textContent = img.name
    }
}