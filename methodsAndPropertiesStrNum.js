const str = "test";
// const arr = [1, 2, 4, 5, 8];
//
// console.log(str.length); свойство считающее кол-во символов
// console.log(arr.length); элементов
//
// console.log(str.toUpperCase()) // Method Делает буквы большими

console.log(str.toLowerCase()); // Method делающий все буквы маленькими
//console.log(str[2]); находит буквы по порядку
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //Method должен принимать какой-то аргумент, помогает найти под каким номером
                                    // находится определнное слово, начая с 0 и существует ли он

const logg = "Hello World";
//Методы строк (изменение регистра)
// console.log(logg.slice(4, 5)); можно с минусовым значением
//
// console.log(logg.substring(6, 11)); // две команды, которые могут обрещать строку по порядку с 0
//
// console.log(logg.substr(6, 5)) //Method который говорит сколько симоволов необходимо вырезать.

const num = 12.2;
console.log(Math.round(num)); //Метод округления

const test = "12.2px";
console.log(parseInt(test)); // Переводит число в другую систему исчисления

console.log(parseFloat(test)); //Позволяет дробные значения


