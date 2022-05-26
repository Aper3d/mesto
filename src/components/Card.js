export default class Card {
    constructor({ data, handleDeliteCard, handleLikeCard, handleViewCard }, templateCard, api, userId) {
        this._link = data.link
        this._name = data.name
        this._likes = data.likes
        this._id = data._id
        this._ownerId = data.owner._id
      
        this._api = api
        this._userId = userId

        this._handleDeliteCard = handleDeliteCard
        this._handleViewCard = handleViewCard
        this._handleLikeCard = handleLikeCard

        this._templateCard = templateCard

        this._likeButton = null
        this._likeCounter = null
        this._element = null
        this._deliteButton = null

    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateCard).content.cloneNode(true)
        return cardElement
    }

    createCard() {
        this._card = this._getTemplate()

        this._image = this._card.querySelector('.element__photo')
        this._likeButton = this._card.querySelector('.element__like-button')
        this._likeCounter = this._card.querySelector('.element__like-counter')
        this._deliteButton = this._card.querySelector('.element__delete-button')
        this._element = this._card.querySelector('.element')

        this._image.src = this._link
        this._image.alt = this._name
        this._card.querySelector('.element__description').textContent = this._name
        this._card.querySelector('.element__like-counter').textContent = this._likes.length

        if (!(this._ownerId === this._userId)) {
            this._deliteButton.style.display = 'none'
        }
        if (this._likes.find((obj) => this._userId === obj._id)) {
            this._likeButton.classList.add('element__like-button_active')
        }

        this._setEventListeners()
        return this._card
    }

    _setEventListeners() {
        this._deliteButton.addEventListener('click', () => {this._handleDeliteCard()})
        this._image.addEventListener('click', () => {this._handleViewCard()})
        this._likeButton.addEventListener('click', () => {this._handleLikeCard()})
    }

    handleLikeCard() {
        if(!(this._likeButton.classList.contains('element__like-button_active'))) {
          this._api.like(this._id)
            .then((data) => {
              this._likeButton.classList.add('element__like-button_active')
              this._likeCounter.textContent = data.likes.length
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          this._api.dislike(this._id)
            .then((data) => {
              this._likeButton.classList.remove('element__like-button_active')
              this._likeCounter.textContent = data.likes.length
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }

    removeCard() {
        this._element.remove()
      }
}
