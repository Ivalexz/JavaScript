// task1
// const multiplyNumbers=(a, b)=>{
//     if(typeof(a)!=='number' || typeof(b)!=='number'){
//     throw new Error("Введіть число")
//     }
//     else{
//         console.log(a*b)
//     }
// }

// multiplyNumbers('qref', 4)

// task2
// const getUserName=()=>{
//     const name=prompt("Введіть своє ім'я: ")
//     console.log(`Ваше ім'я: ${name}`)
// }

// getUserName()

// TASK3
// const isAdult=()=>{
//     const usersAge=parseInt(prompt("Введіть свій вік: "))
//     if(usersAge>=18){
//         alert("Ви повнолітній")
//     }
//     else{
//         alert("Ви не повнолітній")
//     }
// }

// isAdult()

// task4
// const addNumberToArray=(arr, num)=>{
//     arr.push(num)
//     console.log(`Новий масив: ${arr}`)
// }

// addNumberToArray([4,5,6], 3)

// task5
// const caltulateGrade=(score)=>{
//     switch(true){
//         case score<=59 && score >=0:
//         console.log("F");
//         break;

//         case score<=69 && score >59:
//         console.log("D");
//         break;

//         case score<=79 && score >69:
//         console.log("C");
//         break;

//         case score<=89 && score >79:
//         console.log("B");
//         break;

//         case score<=100 && score >89:
//         console.log("A");
//         break;

//         default:
// 			throw new Error('Enter the valid number')
//     }
// }

// caltulateGrade(98)


// task6
// const corfimExit=()=>{
//     const usersInput =confirm("Ви впевнені?")
//     if(usersInput===true){
//         console.log("Ви підтвердили вихід")
//     }
//     else{
//         console.log("Ви скасували вихід")
//     }
// }
// corfimExit()

// task7
// const sumArray = (...args) => args.reduce((total, num) => total + num, 0);
// console.log(`Сума чисел: ${sumArray(3,5,6)}`);

// task8
// const findMaxNumber=(arr)=>console.log(Math.max.apply(null, arr))
// findMaxNumber([4, 5, 23, -32])

// task9
// const compareTwoNumbers=(a, b)=>console.log(a>b ? 'Перше число є більшим':'Перше число є меншим')
// compareTwoNumbers(55,6)

// task10
// const reverseString=(str)=>{
//     str=str.split('')
//     str=str.reverse()
//     console.log(str.join(''))
// }
// reverseString('Aba')

// task11
// const getOddNumbers=(arr)=>{
//     let newArr=[]
//     for (const i of arr) {
//         if(i%2==0){
//             newArr.push(i)
//         }
//     }
//     console.log(`Масив з парними числами: ${newArr}`)
// }
// getOddNumbers([5,6,7,8])

// task12
// const greetUser=(greeting, name)=>{
//     alert(`${greeting}, ${name}!`);
// }
// greetUser.call(this, 'Hello', 'Ababa')

// task13
// const numbers = [2, 4, 6, 8, -3, 12, -15];
// const sumUsingApply = (numbers) => {
//     return numbers.reduce((a, b) => a + b, 0)
// }
// console.log(`Сума елементів масиву: ${sumUsingApply(numbers)}`)

// task14
// const multiplyWithBind=(a, b)=>{
//     return a*b
// }

// const output=(a, b)=>{
//     let result=multiplyWithBind.bind()
//     return result(a,b)
// }

// console.log(`Результат: ${output(-4,6)}`)


// task15
// const isPalindrome=()=>{
//     let reverseStr;
//     let str=prompt('Введіть рядок: ');
//     reverseStr = str.split('').reverse().join('')
//     if(reverseStr===str){
//         console.log(`Слово є паліндромом`)
//     }
//     else{
//         console.log(`Слово не є паліндромом`)
//     }
// }
// isPalindrome()

// TASK16
// let array=[-5,2,13,-7,9,-2,10];
// const getPositiveNumbers=(arr)=>{
//     for (let i of arr) {
//         let index=arr.indexOf(i);
//         if(i<0){
//             arr.splice(index,1);
//         };
//     }
//     console.log(`Додатні числа: ${arr}`);
// };
// getPositiveNumbers(array);

// task17
// let array=[2,'hello',-3,'10',5.4]
// const printArray=(arr)=>{
//     for (const i of arr) {
//         alert(i)
//     }
// }
// printArray(array)

// task18
// let array=[2,13,-7,9,-2,10, 53];
// const getAverage=(arr)=>{
//     let avarage=0;
//     for (const i of arr) {
//         avarage+=i
//     }
//     console.log(`Приблизне середнє арифметичне: ${Math.round(avarage/arr.length)}`)
// }
// getAverage(array)

// task19
// const checkPassword=(password)=>{
//     const usersPass=prompt("Введіть пароль: ")
//     password===usersPass ? alert("Пароль ввведено вірно") : alert("Невірно введений пароль")
// }
// checkPassword('helloWorld')

// task 20
const fizzBuzz=(n)=>{
    if(n%3===0 && n%5===0){
        console.log("FizzBuzz")
    }
    else if(n%3===0){
        console.log('Fizz')
    }
    else if(n%5===0){
        console.log('Buzz')
    }
    else{
        console.log("Ніяка з умов не справджується")
    }
}
fizzBuzz(15)