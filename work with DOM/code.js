const form = document.querySelector('.formWithValidation')
const validateBtn = form.querySelector('.validateBtn')
const from = form.querySelector('.from')
const password = form.querySelector('.password')
const passwordConfirmation = form.querySelector('.passwordConfirmation')
const where = form.querySelector('.where')
const message = form.querySelector('.message')
const fields = form.querySelectorAll('.field')

generateError = text => {
  const error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

removeValidation = () => {
  const errors = form.querySelectorAll('.error')

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

checkFieldsPresence = () => {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      const error = generateError('Cannot be blank')
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
}

checkPasswordMatch = () => {
  if (password.value !== passwordConfirmation.value) {
    console.log('not equals')
    const error = generateError('Password doesnt match')
    password.parentElement.insertBefore(error, password)
  }
}

form.addEventListener('submit', event => {
  event.preventDefault()
  removeValidation()
  checkFieldsPresence()
  checkPasswordMatch()
})