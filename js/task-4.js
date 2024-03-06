const registerForm = document.querySelector('.login-form')
registerForm.addEventListener('submit', handSumbmit)
const newUser = {}

function handSumbmit(event) {
    event.preventDefault()
    const form = event.target
    const email = form.elements.email.value
    const password = form.elements.password.value

    if (email === '' || password === '') {
    return alert ('All form fields must be filled in')
    }
    newUser.email = email
    newUser.password = password
    console.log(`Email: ${newUser.email}`)
    console.log(`Password: ${newUser.password}`)
    form.reset()
}