const textInput = document.querySelector('#name-input')
const textSpan = document.querySelector('#name-output')
textInput.addEventListener('input', (event) => {
    if (textInput.value.trim() !== '') {
        textSpan.textContent = event.target.value
    } else {
        textSpan.textContent = 'Anonymous'
    }
})