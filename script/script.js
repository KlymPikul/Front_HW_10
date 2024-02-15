// Удвоение элементов массива
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);


// Преобразование строк в верхний регистр
const strings = ["Klym", "Hayk", "Alexandra"];
const uppercaseStrings = strings.map(str => str.toUpperCase());
console.log(uppercaseStrings);


// Вычисление суммы элементов
const elements = [1, 2, 3, 4, 5];
let sum = 0;
elements.forEach(num => {
    sum += num;
});
console.log(sum);


// Удаление отрицательных чисел
const element = [1, -2, 3, -4, 5, -6, 7];
const positiveElement = element.filter(num => num >= 0);
console.log(positiveElement);