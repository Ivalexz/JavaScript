// ========================task1=======================

// const num = parseFloat(prompt('Введіть число: '))
// if (num>=55 && num<=109){
//     console.log('Число потрапляє в діапазон')
// }
// else{
//     console.log('Число не потрапляє в діапазон')
// }

// =====================task2================

// const age = parseInt(prompt('Введіть свій вік: '))
// if (age>=0 && age<=16){
//     console.log('Ви ще дитина')
// }
// else if (age>=17 && age<=60){
//     console.log('Ви доросла людина')
// }
// else if (age>=61 && age<=100){
//     console.log('Ви особа пенсійного віку')
// }
// else{
//     console.log("Цього віку немає в діапазоні")
// }

// ======================task3========================

// const users_name = prompt("Введіть своє ім'я: ")
// const surname = prompt("Введіть своє прізвище: ")

// if (users_name.length>=7 && surname.length>=8){
//     console.log(`Сума букв імені та прізвища: ${users_name.length+surname.length}` )
// }
// else{
//     console.log("УПС") 
// }

// ================================task4========================

console.log("'Січень' різними мовами")
const lang = prompt('Введіть мову: ')

switch (lang) {
    case 'ua':
        console.log('Українською: Січень')
        break

    case 'en':
        console.log('Англійською: January')
        break

    case 'pl':
        console.log('Польською: Styczeń')
        break

    case 'fr':
        console.log('Французькою: Janvier')
        break

    default:
        console.log("Ви ввели щось не те. Спробуйте ще раз")
}