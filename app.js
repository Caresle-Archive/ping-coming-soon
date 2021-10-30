const form = document.getElementById("email-form")

form.addEventListener('submit', e => {
	e.preventDefault()
	const email = document.getElementById("email").value
	if (email === '') {
		createMessage("Whoops! It looks like you forgot to add your email")
		return
	}
	const valid = validateEmail(email)
	if (!valid) {
		createMessage("Please provide a valid email address")
		return
	}

	if (form.childElementCount >= 3) {
		form.removeChild(form.childNodes[3])
		form.firstElementChild.classList.remove('input-error')
	}
})

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

function createMessage(message) {
	const childCount = form.childElementCount
	if (childCount >= 3) {
		form.removeChild(form.childNodes[3])
	}
	form.firstElementChild.classList.add('input-error')
	const div = document.createElement('div')
	div.classList.add('text-error')
	div.innerHTML = message
	form.insertBefore(div, form.lastElementChild)
}