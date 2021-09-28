import './scss/main.scss'

const EMPTY_EMAIL_FIELD = 'Oops! Please add your email'
const INVALID_EMAIL = 'Oops! Please check your email'
const SUCCESSFUL_REQUEST = 'Huraay! Request is successfuly sent'
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const form = document.querySelector('.form')
const message = document.getElementById('message')

const validateField = (field) => {
    if (field === '') {
        message.innerHTML = EMPTY_EMAIL_FIELD
        message.classList.add('danger')
        return false
    }

    if (!EMAIL_PATTERN.test(field)) {
        message.innerHTML = INVALID_EMAIL
        message.classList.add('danger')
        return false
    }

    return true
}

const showSuccess = () => {
    if (message.classList.contains('danger')) {
        message.classList.remove('danger')
    }

    message.classList.add('success')
    message.innerHTML = SUCCESSFUL_REQUEST
}

const resetView = () => {
    message.classList.remove('success')
    message.innerHTML = ''
    document.getElementById('email').value = ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value

    if (!validateField(email)) return

    showSuccess()    

    setTimeout(resetView, 2000)
})
