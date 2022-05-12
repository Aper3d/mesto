import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor( popupSelector, submitCallback ) {
        super(popupSelector)
        this._submitCallback = submitCallback
        this._popupForm = this._popup.querySelector('.popup__forms')
        //this._inputList = this._popupForm.querySelectorAll('.popup__input')
    }

    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll('.popup__input')
        this._inputValues = {}
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value          
        })
        return this._inputValues
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitCallback(this._getInputValues())
        })
    }

    closePopup() {
        super.closePopup()
        this._popupForm.reset()
    }
}