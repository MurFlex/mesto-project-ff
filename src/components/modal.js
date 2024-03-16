import { addCard, createCard, deleteCard, likeCard } from './card.js'
import { FORM_TYPES } from './constants.js'

const cardTemplate = document
	.querySelector('#card-template')
	.content.querySelector('.places__item')

const imageModal = document.querySelector('.popup_type_image')

const placesList = document.querySelector('.places__list')

export function openImage({ name, link }) {
	imageModal.querySelector('.popup__image').src = link
	imageModal.querySelector('.popup__image').alt = name
	imageModal.querySelector('.popup__caption').textContent = name

	openModal(imageModal)
}

export const openModal = modalElement => {
	modalElement.classList.add('popup_is-opened')

	const modalCloseButton = modalElement.querySelector('.popup__close')

	const modalContent = modalElement.querySelector('.popup__content')

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			closeModal(modalElement)
		}
	})

	modalCloseButton.addEventListener('click', () => {
		closeModal(modalElement)
	})

	modalContent.addEventListener('click', e => {
		e.stopPropagation()
	})

	modalElement.addEventListener('click', e => {
		closeModal(modalElement)
	})
}

export const closeModal = modalElement => {
	modalElement.classList.remove('popup_is-opened')
}

export function handleFormSubmit(e) {
	e.preventDefault()

	if (!e.target.formType) {
		closeModal(this.closest('.popup'))
	}

	switch (e.target.formType) {
		case FORM_TYPES.newCard:
			const card = {
				name: e.target.querySelector('.popup__input_type_card-name').value,
				link: e.target.querySelector('.popup__input_type_url').value,
			}

			const createdCard = createCard(
				card,
				cardTemplate,
				deleteCard,
				openImage,
				likeCard
			)

			addCard(placesList, createdCard)
			break
		case FORM_TYPES.profileEdit:
			const name = e.target.querySelector('.popup__input_type_name')
			const description = e.target.querySelector(
				'.popup__input_type_description'
			)

			changeProfileData({
				name: name.value,
				description: description.value,
			})
			break
		default:
			throw new Error('Unknown form type')
	}

	closeModal(this.closest('.popup'))
}

const changeProfileData = ({ name, description }) => {
	document.querySelector('.profile__title').textContent = name
	document.querySelector('.profile__description').textContent = description
}
