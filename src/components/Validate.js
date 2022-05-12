export default class FormValidator {
    constructor(config, formElement) {
        this._inputSelector = config.inputSelector
        this._formSelector = config.formSelector
        this._submitButtonSelector = config.submitButtonSelector
        this._inactiveButtonClass = config.inactiveButtonClass
        this._inputErrorClass = config.inputErrorClass
        this._errorClass = config.errorClass

        this._formElement = document.querySelector(formElement)
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector)
    }

    _showInputError(inputElement) {
        inputElement.classList.add('popup__input_invalid')
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        errorElement.textContent = inputElement.validationMessage
        errorElement.classList.add(this._errorClass)
    };

    _hideInputError(inputElement) {
        inputElement.classList.remove('popup__input_invalid')
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        errorElement.textContent = " "
        errorElement.classList.remove(this._errorClass)
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement)
        } else {
            this._hideInputError(inputElement)
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._submitButton.classList.add(this._inactiveButtonClass)
            this._submitButton.setAttribute("disabled", "disabled")
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass)
            this._submitButton.removeAttribute("disabled", "disabled")
        }
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement)
                this._toggleButtonState()
            })
        })
        this._toggleButtonState()
    }

    enableValidation() {
        this._setEventListeners()
    }
    resetError() {
        const error = Array.from(this._formElement.querySelectorAll(this._inputSelector))
        error.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
        this._submitButton.setAttribute("disabled", "disabled")
        this._submitButton.classList.add(this._inactiveButtonClass)
    }
}