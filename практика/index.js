const menu = document.querySelector('.menu')
const login = document.querySelector('.login')
const lang = document.querySelector('.lang')
const btn = document.querySelector('.burger')
btn.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
    login.classList.toggle('hidden')
    lang.classList.toggle('hidden')
})