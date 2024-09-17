// task1
// let myArr = [];
// for (let i = 0; i < 4; i++) {
//     myArr.push(Math.floor(Math.random()*100));
// }
// console.log(`Масив до змін: ${myArr}`);
// myArr[1]=45;
// console.log(`Масив після змін: ${myArr}`);

// task2
// let myArray = [];
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     myArray.push(Math.floor(Math.random()*(50+50)-50));
// }
// for (const i of myArray) {
//     sum+=i;
// }
// console.log(`Масив: ${myArray} \nСума елементів масиву: ${sum}`);

// task3
// let myArray = [];
// for (let i = 0; i < 10; i++) {
//     myArray.push(Math.floor(Math.random()*(100+100)-100));
// }
// for (const i of myArray) {
//     console.log(`Елемент масиву: ${i}`);
// }

// task4
// let myArray = [];
// let max = 0;
// for (let i = 0; i < 15; i++) {
//     myArray.push(Math.floor(Math.random() * (90 + 20) - 20));
// }
// for (const i of myArray) {
//     if (i > max) {
//         max = i
//     }
// }
// console.log(`Масив: ${myArray} \nМаксимальне значення: ${max}`);

// task5
// let Array=[]
// let moreThan7=[]
// let myStr
// for(let i=0; i<4; i++){
//     myStr=prompt("Введіть рядок");
//     if(myStr.length>7){
//         moreThan7.push(myStr)
//     }
//     Array.push(myStr)
// }
// console.log(`Усі рядки: ${Array} \nРядки, котрі мають більше семи символів: ${moreThan7}`)

// task6
// const myArr=['abcd', 'nemo', 'lion', 'blue'];
// console.log(`Об'єднаний у один рядок масив: ${myArr.join(', ')}`);

// task7
// let myArray = [];
// let word = prompt("Введіть слово: ");
// for (const i of word) {
//     if(i===i.toLowerCase()){
//         myArray.push(i.toUpperCase())
//     }
//     else{
//         myArray.push(i.toLowerCase())
//     }
// }
// console.log(`Змінене слово: ${myArray.join('')}`)


// task8
myArr=[];
for (let i = 0; i < 5; i++) {
    let word=prompt("Введіть слово: ");
    myArr.push(word)
}
console.log(`Введені Вами слова: ${myArr}`)