function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundColor = document.querySelector('body')
const buttom = document.querySelector('.change-color')
const text = document.querySelector('.color')
buttom.addEventListener('click', () => {
  let colors = getRandomHexColor()
  backgroundColor.style.backgroundColor = colors
  text.textContent=colors
})