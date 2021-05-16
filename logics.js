let testData = [
  1,
  2,
  1990,
  85,
  24,
  'Vasya',
  'colya@example.com',
  'Rafshan',
  'ashan@example.com',
  true,
  false
]
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1]
let testData3 = [
  {
    name: 'Vasya',
    email: 'vasya@example.com',
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 }
  },
  {
    name: 'Dima',
    email: 'dima@example.com',
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 }
  },
  {
    name: 'Colya',
    email: 'colya@example.com',
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 }
  },
  {
    name: 'Misha',
    email: 'misha@example.com',
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 }
  },
  {
    name: 'Ashan',
    email: 'ashan@example.com',
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 }
  },
  {
    name: 'Rafshan',
    email: 'rafshan@example.com',
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 }
  }
]
let testData4 = [
  { name: 'Vasya', email: 'vasya@example.com', age: 20 },
  { name: 'Dima', email: 'dima@example.com', age: 34 },
  { name: 'Colya', email: 'colya@example.com', age: 46 },
  { name: 'Misha', email: 'misha@example.com', age: 16 },
  { name: 'Ashan', email: 'ashan@example.com', age: 99 },
  { name: 'Rafshan', email: 'rafshan@example.com', age: 11 },
  1,
  2,
  1990,
  85,
  24,
  'Vasya',
  'colya@example.com',
  'Rafshan',
  'ashan@example.com',
  true,
  false,
  [
    [
      [
        [
          1,
          2,
          1990,
          85,
          24,
          'Vasya',
          'colya@example.com',
          'Rafshan',
          'ashan@example.com',
          true,
          false,
          [{ name: 'Rafshan', email: 'rafshan@example.com', age: 11 }]
        ]
      ]
    ]
  ]
]

/*1. Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.*/

const cloneDeep = obj => JSON.parse(JSON.stringify(obj))

/*console.log(cloneDeep(testData)) // (11) [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]*/

/*console.log(cloneDeep(testData2)) // (8) [1, 2, 1990, 85, 24, 5, 7, 8.1]*/

/*console.log(cloneDeep(testData3)) // 
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0: {name: "Vasya", email: "vasya@example.com", age: 20, skills: {…}}
1: {name: "Dima", email: "dima@example.com", age: 34, skills: {…}}
2: {name: "Colya", email: "colya@example.com", age: 46, skills: {…}}
3: {name: "Misha", email: "misha@example.com", age: 16, skills: {…}}
4: {name: "Ashan", email: "ashan@example.com", age: 99, skills: {…}}
5:
age: 11
email: "rafshan@example.com"
name: "Rafshan"
skills:
js: 0
madness: 0
php: 0
rage: 10
*/

/*console.log(cloneDeep(testData4)) // 
(18) [{…}, {…}, {…}, {…}, {…}, {…}, 1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, Array(1)]
0: {name: "Vasya", email: "vasya@example.com", age: 20}
1: {name: "Dima", email: "dima@example.com", age: 34}
2: {name: "Colya", email: "colya@example.com", age: 46}
3: {name: "Misha", email: "misha@example.com", age: 16}
4: {name: "Ashan", email: "ashan@example.com", age: 99}
5: {name: "Rafshan", email: "rafshan@example.com", age: 11}
6: 1
7: 2
8: 1990
9: 85
10: 24
11: "Vasya"
12: "colya@example.com"
13: "Rafshan"
14: "ashan@example.com"
15: true
16: false
17: Array(1)
0: Array(1)
0: Array(1)
0: Array(12)
0: 1
1: 2
2: 1990
3: 85
4: 24
5: "Vasya"
6: "colya@example.com"
7: "Rafshan"
8: "ashan@example.com"
9: true
10: false
11: Array(1)
0: {name: "Rafshan", email: "rafshan@example.com", age: 11}
*/

/*2. Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.*/

const arrays = [[1, 2, 3], [4, 5], [6]]
const result = arr => arr.reduce((result, value) => result.concat(value), [])

/*console.log(result(arrays)) // [1, 2, 3, 4, 5, 6]*/

/*Для решения этой задачи лучше использовать метод flat*/

const result2 = arrays.flat()

/*console.log(result2) // (6) [1, 2, 3, 4, 5, 6]*/

/*3. Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.*/

function MultiplicatorUnitFailure () {}

function primitiveMultiply (a, b) {
  if (Math.random() < 0.5) return a * b
  else throw new MultiplicatorUnitFailure()
}

function mainMultiply (a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b)
    } catch (e) {
      continue
    }
  }
}

/*console.log(mainMultiply(12,44)) // 582*/

/*4. Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.*/

const arr = [1, 2, 3]
Array.prototype.append = (...value) => [...value].concat(arr)

/*arr.append(6,4,6,7,8) // (8) [6, 4, 6, 7, 8, 1, 2, 3]*/

/*5. Выведите все элементы массива используя рекурсию.*/

const arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']

function recuseLog (array) {
  if (array.length > 0) {
    console.log(array.shift())
    recuseLog(array)
  }
}

/*recuseLog(arr) // 
Solnce
vishlo
iz
za
tuchi
*/

/* 6. Написать функцию для выполнения параллельных вычислений без использования Promise.*/
const a = function (one, two) {
  return one + two
}

const b = function () {
  return false
}

const paralell = (functionOne, functionTwo) => {
  const res = []
  functionOne.forEach(([func, thisArgs = []]) => {
    setTimeout(() => res.push(func(...thisArgs)), 0)
  })
  setTimeout(functionTwo, 0, res)
}

/* paralell([[a, [5, 6]], [b]], function (results) {
  console.log(results);
}); // (2) [11, false]
*/

/*8. Сделать функцию которая обрезает массив до указанного значения.*/

const truncatedArray = (arrey, info) => {
  const searchTruncated = arrey.indexOf(info)
  return arrey.slice(searchTruncated)
}

/*truncatedArray(testData,"Vasya") // (6) ["Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]*/
/*truncatedArray(testData,2) // (10) [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]*/
/*truncatedArray(testData,8) // [false]*/

/*10. Сделать функцию которая возвращает уникальные элементы массива.*/

const testArrey = [3, 3, 5, 2, 4, 6, 3, 2, 2, 5]
const uniqueElements = arrey => [...new Set(arrey)]

/*console.log(uniqueElements(testArrey)) // (5) [3, 5, 2, 4, 6]*/

/*11. Сделать функцию которая сможет делать срез данных с ассоциативного массива.*/

const associativeArray = Array.from(
  new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
    ['key5', 'value5'],
    ['key6', 'value6'],
    ['key7', 'value7'],
    ['key8', 'value7'],
    ['key9', 'value9'],
    ['key10', 'value10']
  ])
)

const slice = (arr, start, end) => arr.slice(start, end)

/*slice(arr,3,5) // 
(2) [Array(2), Array(2)]
0: (2) ["key4", "value4"]
1: (2) ["key5", "value5"]
*/

/*12. Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.*/

const newObj = (keysArrey, valuesArrey) => {
  const result = {}
  const filterKeysArrey = keysArrey.filter(
    key => typeof key === 'string' || typeof key === 'number'
  )
  for (let i = 0; i < filterKeysArrey.length; i++) {
    result[filterKeysArrey[i]] = valuesArrey[i]
  }
  return result
}

/*newObj(testData,testData2) // {1: 1, 2: 2, 24: 24, 85: 85, 1990: 1990, Vasya: 5, colya@example.com: 7, Rafshan: 8.1, ashan@example.com: undefined}*/

/*Данные 2 задачи у меня не получилось решить*/
/*7. Сделать функцию поиска значений в массиве.*/
/*9. Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.*/
