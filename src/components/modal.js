export const openModal = modalElement => {
	document.addEventListener('keydown', handleEscape)

	modalElement.classList.add('popup_is-opened')
}

export const closeModal = modalElement => {
	document.removeEventListener('keydown', handleEscape)

	modalElement.classList.remove('popup_is-opened')
}

export function handleEscape(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened')
		closeModal(openedPopup)
	}
}
