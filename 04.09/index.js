// =========task1============

// const min = parseInt(prompt('Введіть перше число (менше): '));
// const max = parseInt(prompt('Введіть друге число (більше): '));
// let sum = 0;
// if (min>max){
//     console.log('Ви ввели щось не те');
// }
// else{
//     for (let i = min; i < max; i++) {
//         sum+=i;
//     }
//     console.log(`Сума чисел введеного діапазону: ${sum}`);
// }

// ==========task2========

// const num1 = parseFloat(prompt('Введіть перше число: '));
// const num2 = parseFloat(prompt('Введіть друге число: '));
// let nsd = 0;

// for (let i = 0; i <= num2 || i <=num1; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//         nsd = i
//     }
// }
// console.log(`Найбільший спільний дільник введених чисел: ${nsd}`);

// ============task3===================

// const num = parseInt(prompt('Введіть число: '));
// let n = 0;

// for (let i = 1; i <= num; i++) {
//     if (num%i===0){
//         n+=1
//         console.log(`Дільник введеного числа № ${n}: ${i}`);
//     }   
// }

// ================task4=============

// let n = 0
// const number = prompt('Введіть число: ');
// let str_num=number
// for (let i = 0; i < str_num.length; i++) {
//     n+=1
// }
// if (number>=0 || number<0){
//     console.log(`Кількість цифр у введеному числі: ${n}`)
// }
// else{
//     console.log('Ви ввели щось не те')
// }

// =====================task5====================
// let i=0;
// let plus=0;
// let minus=0;
// let zero=0;
// let pair=0;
// let notPair=0;
// do{
//     const num = parseInt(prompt('Введіть число: '));
//     i+=1
//     if (num>0 && num%2===0){
//         plus+=1;
//         pair+=1;
//     }
//     else if (num===0 && num%2===0){
//         zero+=1;
//         pair+=1;
//     }
//     else if (num<0 && num%2===0){
//         minus+=1;
//         pair+=1;
//     }
//     else if (num>0 && num%2!==0){
//         plus+=1;
//         notPair+=1;
//     }
//     else if (num===0 && num%2!==0){
//         zero+=1;
//         notPair+=1;
//     }
//     else if (num<0 && num%2!==0){
//         minus+=1;
//         notPair+=1;
//     }
//     else if(num%2!==0){
//         notPair+=1;
//     }
//     else{
//         console.log('Ви ввели щось не те');
//     }

// }
// while (i!==10);
// console.log(`Користувач ввів такі числа: ${plus} - додатні, ${minus} - від'ємні, ${zero} - нулі, ${pair} - парні, ${notPair} непарні`)

// ==================task6================
let users_input = ''
do {
    num1 = parseFloat(prompt('Введіть перше число: '));
    action = prompt('Введіть дію: (+ додати, - відняти, * помножити, / поділити, ** в степінь');
    num2 = parseFloat(prompt('Введіть друге число: '));
    if (num2 !== 0) {
        switch (action) {
            case '+':
                console.log(`Результат: ${num1 + num2}`)
                break;

            case '-':
                console.log(`Результат: ${num1 - num2}`)
                break;

            case '*':
                console.log(`Результат: ${num1 * num2}`)
                break;

            case '/':
                console.log(`Результат: ${num1 / num2}`)
                break;

            case '**':
                console.log(`Результат: ${num1 ** num2}`)
                break;

            default:
                break;
        }
    }
    else {
        console.log("Ділити на 0 неможливо ")
    }
    let choise = prompt('Хочете розв’язати ще один приклад? (якщо введете "НІ" скрипт зупиниться)');
    users_input = choise.toLowerCase();
}
while (users_input !== 'ні')

// =============task7=================
