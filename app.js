const form = document.getElementById("email-form")
const div = document.querySelector('.text-error')
const button = document.querySelector('.btn-form')

form.addEventListener('submit', e => {
	e.preventDefault()
	const inputEmail = document.getElementById("email")
	const email = inputEmail.value
	if (email === '') {
		createMessage("Whoops! It looks like you forgot to add your email", 1)
		return
	}
	const valid = validateEmail(email)
	if (!valid) {
		createMessage("Please provide a valid email address", 2)
		return
	}
	div.innerHTML = ""

	if(button.classList.contains("error-show-1")) {
		button.classList.remove("error-show-1")
	} else if (button.classList.contains("error-show-2")) {
		button.classList.remove("error-show-2")
	}

	if(inputEmail.classList.contains('input-error')) {
		inputEmail.classList.remove('input-error')
	}
	
})

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

function createMessage(message, btnClass) {
	
	const email = document.getElementById('email')
	if (btnClass === 1) {
		button.classList.add('error-show-1')
	} else {
		button.classList.add('error-show-2')
	}
	div.innerHTML = message
	email.classList.add('input-error')
}