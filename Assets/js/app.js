document.querySelector('.hamburger-icon').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.add('nav-list-down')
})

document.querySelector('.close-toggle').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.remove('nav-list-down')
})