export const createCard = (
	{ link = '', name = '' },
	cardTemplate,
	deleteHandler,
	openImageHandler,
	likeHandler
) => {
	const card = cardTemplate.cloneNode(true)

	const image = card.querySelector('.card__image')

	image.src = link
	image.alt = name
	card.querySelector('.card__title').textContent = name

	card.addEventListener('click', () => openImageHandler({ name, link }))

	card
		.querySelector('.card__delete-button')
		.addEventListener('click', deleteHandler)

	card
		.querySelector('.card__like-button')
		.addEventListener('click', likeHandler)

	return card
}

export const addCard = (list, card) => {
	list.append(card)
}

export const deleteCard = e => {
	e.stopPropagation()

	const eventTarget = e.target.closest('.places__item')

	if (!eventTarget) return

	eventTarget.remove()
}

export const likeCard = e => {
	e.stopPropagation()
	const eventTarget = e.target.closest('.places__item')

	if (!eventTarget) return

	eventTarget
		.querySelector('.card__like-button')
		.classList.toggle('card__like-button_is-active')
}
