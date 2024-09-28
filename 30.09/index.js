// =============================hide/show=============================
const colorForm=document.querySelector('#color_form');
const hiddenBtn=document.querySelector('#hide_btn');
const shownBtn=document.querySelector('#show_btn');
const body=document.querySelector('body')

hiddenBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    colorForm.classList.add('hide')
    hiddenBtn.classList.add('hide')
    shownBtn.classList.remove('hide')
})

shownBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    colorForm.classList.remove('hide')
    hiddenBtn.classList.remove('hide')
    shownBtn.classList.add('hide')
})

// =============================color change=====================
const redCol=document.querySelector('#red')
const lightCol=document.querySelector('#lightBlue')
const navyCol=document.querySelector('#navy')

redCol.addEventListener('click', ()=>{
    body.classList.add('red')
    body.classList.remove('lightBlue')
    body.classList.remove('navy')
})

lightCol.addEventListener('click', ()=>{
    body.classList.add('lightBlue')
    body.classList.remove('red')
    body.classList.remove('navy')
})

navyCol.addEventListener('click', ()=>{
    body.classList.add('navy')
    body.classList.remove('lightBlue')
    body.classList.remove('red')
})


// ===========================show information======================
const regBtn=document.querySelector('#submit_btn')
const firstname=document.querySelector('#firstname')
const lastname=document.querySelector('#lastname')
const email=document.querySelector('#email')

regBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    alert(`First name: ${firstname.value},\nLast name: ${lastname.value},\nEmail: ${email.value}`)
})