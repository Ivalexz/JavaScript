// task6
// const percentOp=()=>{
//     const num1=parseInt(prompt("Введіть перше число:"))
//     const num2=parseInt(prompt("Введіть друге число:"))
//     if(num2!==0){
//     console.log(`Отстача від ділення ${num1} на ${num2} — ${num1-(Math.floor(num1/num2)*num2)}`)
//     }
//     else{
//         console.log('Ділення на 0 неможливе')
//     }
// }
// percentOp()

// task7
// const sumNumbers=(...numbers)=>{
//     if(numbers.length>5 || numbers.length==0){
//         console.log("Ви ввели щось не те")
//     }
//     else{
//         let sum=0
//         for (const i of numbers) {
//             sum+=i
//         }
//         console.log(`Сума введених чисел: ${sum}`)
//     }
// }
// sumNumbers(21,-23,2,5)

// task8
const maxOfNumbers=(...numbers)=>{
    if(numbers.length>5 || numbers.length==0){
        console.log("Ви ввели щось не те")
    }
    else{
        console.log(`Найбільше число: ${Math.max(...numbers)}`)
    }
}
maxOfNumbers(32,33,-35)