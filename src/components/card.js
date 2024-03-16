export const createCard = (
	{ link = '', name = '' },
	cardTemplate,
	{ deleteCard, openImage, likeCard }
) => {
	const card = cardTemplate.cloneNode(true)

	const image = card.querySelector('.card__image')

	image.src = link
	image.alt = name
	card.querySelector('.card__title').textContent = name

	card
		.querySelector('.card__image')
		.addEventListener('click', () => openImage({ name, link }))

	card
		.querySelector('.card__delete-button')
		.addEventListener('click', deleteCard)

	card.querySelector('.card__like-button').addEventListener('click', likeCard)

	return card
}

export const addCard = (list, card) => {
	list.prepend(card)
}

export const deleteCard = e => {
	const eventTarget = e.target.closest('.places__item')

	if (!eventTarget) return

	eventTarget.remove()
}

export const likeCard = e => {
	e.target.classList.toggle('card__like-button_is-active')
}
