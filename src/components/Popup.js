export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector)
    }
    _keydownClosePopup(evt) {
        if (evt.key === 'Escape') {
            this.closePopup()
        }
    }

    _mousedownClosePopup(evt) {
        if (evt.target.classList.contains('popup__overlay') || evt.target.classList.contains('popup__close-button')) {
            this.closePopup()
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._mousedownClosePopup.bind(this))
    }
    
    openPopup() {
        this._popup.classList.add('popup_open')
        document.addEventListener('keydown', this._keydownClosePopup.bind(this))
    }

    closePopup() {
        this._popup.classList.remove('popup_open')
        document.removeEventListener('keydown', this._keydownClosePopup)
    }

}