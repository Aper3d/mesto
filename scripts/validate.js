
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, config);
    });
};

const showInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    errorElement.textContent = " ";
    errorElement.classList.remove(config.errorClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, config);
    } else {
        hideInputError(formElement,inputElement, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, submitButton, config) => {
    if (hasInvalidInput(inputList)) {
        submitButton.classList.add(config.inactiveButtonClass);
        submitButton.setAttribute("disabled", "disabled");
    } else {
        submitButton.classList.remove(config.inactiveButtonClass);
        submitButton.removeAttribute("disabled", "disabled");
    }
};

const setEventListeners = (formElement, config) => {
    /*formElement.addEventListener("submit", function (event) {
        event.preventDefault();
    });*/
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const submitButton = formElement.querySelector(config.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, submitButton, config);
        });
    });
    toggleButtonState(inputList, submitButton, config);
};

enableValidation({
    formSelector: ".popup__forms",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_inactiv",
    inputErrorClass: ".popup__error",
    errorClass: "popup__error_visible"
});
