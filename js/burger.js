let catalog = document.querySelector('.catalog')
let closed = document.querySelector('.cross')
let menu = document.querySelector('.left-menu')
let crossed = document.querySelector('.cross-visible')
let btn = document.querySelector('.burger')

btn.addEventListener('click', function () {
    menu.classList.add('left-menu-active')
    btn.classList.remove('visible')

    catalog.classList.add('catalog-hidden')
    closed.classList.add('cross-visible')
})
closed.addEventListener('click', function () {
    menu.classList.remove('left-menu-active')
    btn.classList.add('visible')

    catalog.classList.remove('catalog-hidden')
    closed.classList.remove('cross-visible')
})
