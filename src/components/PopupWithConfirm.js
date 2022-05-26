import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupForm = this._popup.querySelector('.popup__forms')
        this._submitButton = this._popupForm.querySelector('.popup__submit-button')
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleSubmitCallback()
        })
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = 'Да'
        }
    }
}