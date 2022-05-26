import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector)
        this._submitCallback = submitCallback
        this._popupForm = this._popup.querySelector('.popup__forms')
        this._inputList = this._popupForm.querySelectorAll('.popup__input')
        this._submitButton = this._popupForm.querySelector('.popup__submit-button')
    }

    _getInputValues() {
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

    close() {
        super.close()
        this._popupForm.reset()
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = 'Сохранить'
        }
    }
}