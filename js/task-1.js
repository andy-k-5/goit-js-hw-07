const allElements = document.querySelectorAll('.item')
console.log(`Number of categories: ${allElements.length}`)
//  allElements.forEach((element) => console.log(`Category: ${element.firstElementChild.textContent} \n Elements: ${element.lastElementChild.children.length}`))
allElements.forEach(function el(element) {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})










