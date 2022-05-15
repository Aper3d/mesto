export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector)
        this._keydownClosePopup = this._keydownClosePopup.bind(this)
    }
    _keydownClosePopup(evt) {
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    _mousedownClosePopup(evt) {
        if (evt.target.classList.contains('popup__overlay') || evt.target.classList.contains('popup__close-button')) {
            this.close()
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._mousedownClosePopup.bind(this))
    }
    
    open() {
        this._popup.classList.add('popup_open')
        document.addEventListener('keydown', this._keydownClosePopup)
    }

    close() {
        this._popup.classList.remove('popup_open')
        document.removeEventListener('keydown', this._keydownClosePopup)
    }

}