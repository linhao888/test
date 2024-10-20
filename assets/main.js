const btnDom = document.querySelector(".js-text")
const numDom = document.querySelector('.num')
let num = 1

btnDom.addEventListener('click', () => {
  num ++
  numDom.innerHTML = num
})