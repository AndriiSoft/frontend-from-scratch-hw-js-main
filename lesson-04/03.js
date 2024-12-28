/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив,
 содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее.
 Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

function findCommonElements(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j] && !includesElement(newArray, array1[i])) {
                newArray.push(array1[i]);
            }
        }
    }
    return newArray;
}

// Пример использования
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2)); // [3, 4, 5]





console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7]))
console.log(findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))
console.log(findCommonElements([1, 2, 3, 4, 5], []))
console.log(findCommonElements([1, 1, 2], [1, 3]))