const trueAnswer = document.querySelector('#true1')
const trueAnswer2 = document.querySelector('#true2')
const trueAnswer3 = document.querySelector('#true3')
const trueAnswer4 = document.querySelector('#true4')
const trueAnswer5 = document.querySelector('#true5')
const trueAnswer6 = document.querySelector('#true6')

const h2 = document.querySelector('.answ')

const button = document.querySelector('.one')
const button2 = document.querySelector('.two')
const button3 = document.querySelector('.three')
const button4 = document.querySelector('.four')
const button5 = document.querySelector('.five')
const button6 = document.querySelector('.six')


const form1=document.querySelector('.form1')
const form2=document.querySelector('.form2')
const form3=document.querySelector('.form3')
const form4=document.querySelector('.form4')
const form5=document.querySelector('.form5')
const form6=document.querySelector('.form6')
const answer=document.querySelector('.answer')

let count = 0

trueAnswer.addEventListener('input', () => {
    count++
})
button.addEventListener('click', () => {
    form2.classList.remove('hide')
    form1.classList.add('hide')
})


trueAnswer2.addEventListener('input', () => {
    count++
})
button2.addEventListener('click', () => {
    form3.classList.remove('hide')
    form2.classList.add('hide')
})


trueAnswer3.addEventListener('input', () => {
    count++
})
button3.addEventListener('click', () => {
    form4.classList.remove('hide')
    form3.classList.add('hide')
})

trueAnswer4.addEventListener('input', () => {
    count++
})
button4.addEventListener('click', () => {
    form5.classList.remove('hide')
    form4.classList.add('hide')
})


trueAnswer5.addEventListener('input', () => {
    count++
})
button5.addEventListener('click', () => {
    form6.classList.remove('hide')
    form5.classList.add('hide')
})

trueAnswer6.addEventListener('input', () => {
    count++
})

button6.addEventListener('click', () => {
    answer.classList.remove('hide')
    form6.classList.add('hide')
    h2.innerHTML = `Результат: ${count} з 6`
})
