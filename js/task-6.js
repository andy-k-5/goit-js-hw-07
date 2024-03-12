const inputEl = document.querySelector("input"); 
const createBtn = document.querySelector("[data-create]"); 
const destroyBtn = document.querySelector("[data-destroy]"); 
const boxesEl = document.getElementById("boxes"); 
 
createBtn.addEventListener("click", createBoxes); 
 
function createBoxes() { 
  const amount = Number(inputEl.value); 
  if (isNaN(amount) || amount < 1 || amount > 100) { 
    return; 
  } 
 
  
 
  for (let i = 0; i < amount; i++) { 
    const size = 30 + i * 10; 
    const color = getRandomHexColor(); 
    const boxEl = document.createElement("div"); 
    boxEl.style.width = `${size}px`; 
    boxEl.style.height = `${size}px`; 
    boxEl.style.backgroundColor = color; 
    boxesEl.appendChild(boxEl); 
  } 
 
  inputEl.value = ""; 
} 
 
function getRandomHexColor() { 
  return `#${Math.floor(Math.random() * 16777215) 
    .toString(16) 
    .padStart(6, "0")}`; 
}

destroyBtn.addEventListener("click", destroyBoxes); 
 
  function destroyBoxes() { 
    boxesEl.innerHTML = ""; 
  } 