const cardTemplate = document
	.querySelector('#card-template')
	.content.querySelector('.places__item')

const placesList = document.querySelector('.places__list')

export const openModal = modalElement => {
	modalElement.classList.add('popup_is-opened')
}

export const closeModal = modalElement => {
	modalElement.classList.remove('popup_is-opened')
}

export function handleEscape(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened')
		closeModal(openedPopup)
	}
}
