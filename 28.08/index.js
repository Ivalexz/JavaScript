// ======================task7=====================
// const usersGb = parseFloat(prompt('Вкажіть обсяг флешки у ГБ: '));
// const gb =1024;
// const mb = 820;
// const formula = Math.floor((usersGb*gb)/mb);
// console.log(` Кількість файлів розміром ${mb} МБ, що вмістяться на флешку: ${formula}`);

// =====================task8====================
// const money = parseFloat(prompt('Вкажіть кількість грошей у гаманці: '));
// const oneChoc = parseFloat(prompt('Вкажіть ціну одної шоколадки: '));

// const chocolate = Math.floor(money/oneChoc);
// const rest = money%oneChoc;

// console.log(`Ви можете купити ${chocolate} шоколадок. Ваша решта: ${rest} грн`);

// =========================task9=======================

// const usersNum = parseInt(prompt('Введіть трьохзначне число: '));

// const hundred = Math.floor(usersNum / 100);
// const ten = Math.floor(usersNum /10 % 10);
// const one = usersNum % 10;

// const palindrom = one*100+ten*10+hundred
// console.log(`Палідром: ${palindrom}`);

// =========================task10=======================

const usersNum = parseInt(prompt('Введіть ціле число: '))

const number = usersNum % 10;

console.log("Парне", number % 2 === 0)
console.log("Непарне", number % 2 !== 0)