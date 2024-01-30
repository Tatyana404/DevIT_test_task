"use strict";

const testData = [
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
];

const testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

const testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 },
  },
];

const testData4 = [
  { name: "Vasya", email: "vasya@example.com", age: 20 },
  { name: "Dima", email: "dima@example.com", age: 34 },
  { name: "Colya", email: "colya@example.com", age: 46 },
  { name: "Misha", email: "misha@example.com", age: 16 },
  { name: "Ashan", email: "ashan@example.com", age: 99 },
  { name: "Rafshan", email: "rafshan@example.com", age: 11 },
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
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
          "Vasya",
          "colya@example.com",
          "Rafshan",
          "ashan@example.com",
          true,
          false,
          [{ name: "Rafshan", email: "rafshan@example.com", age: 11 }],
        ],
      ],
    ],
  ],
];

/*1. Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.*/

const cloneDeep = (obj) => JSON.parse(JSON.stringify(obj));

console.log(cloneDeep(testData4));

/*2. Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.*/

const arrayOfArrays = [[1, 2, 3], [4, 5], [6]];

const customFlat = (arr) => arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(customFlat(arrayOfArrays));

/*4. Расширить прототип Array, добавив к нему метод добавления элементов в начало без использование unshift.*/

const arrayOfNumbers = [1, 2, 3];

Array.prototype.append = (...value) => [...value].concat(arrayOfNumbers);

console.log(arrayOfNumbers.append(0));

/*5. Выведите все элементы массива используя рекурсию.*/

const arrayOfStrings = ["Solnce", "vishlo", "iz", "za", "tuchi"];

const recurseLog = (arr, index = 0) => {
  if (index < arr.length) {
    console.log(arr[index]);
    recurseLog(arr, index + 1);
  }
};

recurseLog(arrayOfStrings);

/* 6. Написать функцию для выполнения параллельных вычислений без использования Promise.*/

const a = function (one, two) {
  return one + two;
};

const b = function () {
  return false;
};

const parallel = (tasks, finalCallback) => {
  const results = [];
  let completedTasks = 0;

  tasks.forEach((task, index) => {
    setTimeout(() => {
      const [func, args] = task;

      const result = func ? func.apply(null, args || []) : undefined;

      results[index] = result;

      if (++completedTasks === tasks.length) {
        finalCallback(results);
      }
    }, 0);
  });
};

parallel([[a, [1, 2]], [b]], function (results) {
  console.log(results);
});

/*7. Сделать функцию поиска значений в массиве.*/

const array_find = (arr, search) => {
  if (!arr || !search) {
    return null;
  }

  let result;

  if (typeof search === "string") {
    result = arr.filter((item) => item === search);
  } else if (search instanceof RegExp) {
    result = arr.filter((item) => search.test(item.toString()));
  } else {
    return null;
  }

  return result.length > 0 ? result : null;
};

console.log(array_find(testData, /^raf.*/i));
console.log(array_find(testData, "Rafshan"));

/*8. Сделать функцию, которая обрезает массив до указанного значения.*/

const array_skip_until = (arr, value) => {
  const index = arr.indexOf(value);

  return index !== -1 ? arr.slice(index) : [];
};

console.log(array_skip_until(testData, 2));
console.log(array_skip_until(testData, "Rafshan"));
console.log(array_skip_until(testData, "asd"));

/*9. Создать функцию, которая нормализует данные в массиве исключая или преобразуя не подходящие.*/

const ageHelper = (arr) => arr.filter((value) => typeof value === "object" && !Array.isArray(value)).map(({ age }) => ({ age }));

const floatHelper = (arr) => arr.filter((value) => typeof value === "number" && !Number.isInteger(value));

const numberHelper = (arr) => arr.filter((value) => typeof value === "number");

const array_normalize = (arr, schema, transform = false) => {
  if (typeof schema === "object") {
    const helpersSchema = String(Object.values(schema));

    switch (helpersSchema) {
      case transform && "float":
        return ageHelper(arr);
      case "float":
        return floatHelper(arr);
      case transform && "int":
      case "int":
        return ageHelper(arr);
      default:
        return arr;
    }
  } else {
    switch (schema) {
      case transform && "string":
        return arr.filter((value) => typeof value !== "object" && typeof value !== "boolean").map((value) => String(value));
      case "string":
        return arr.filter((value) => typeof value === "string");
      case "bool":
        return arr.filter((value) => typeof value === "boolean");
      case transform && "number":
      case "number":
        return numberHelper(arr);
      case transform && "int":
      case "int":
        return numberHelper(arr);
      case "function":
        return arr.filter((value) => typeof value === "function");
      case transform && "float":
        return numberHelper(arr);
      case "float":
        return floatHelper(arr);
      case transform && "array":
      case "array":
        return arr.filter((value) => Array.isArray(value));
      default:
        return arr;
    }
  }
};

console.log(array_normalize(testData4, "string"));
console.log(array_normalize(testData4, "string", true));
console.log(array_normalize(testData4, { age: "float" }));
console.log(array_normalize(testData4, { age: "float" }, true));

/*10. Сделать функцию, которая возвращает уникальные элементы массива.*/

const array_unique = (arr) => [...new Set(arr)];

console.log(array_unique(testData.concat(testData2)));

/*11. Сделать функцию, которая сможет делать срез данных с ассоциативного массива.*/

const array_pluck = (arr, key) => {
  const keys = key.split(".");

  return arr.map((obj) => {
    let current = obj;

    for (const k of keys) {
      current = current && current[k];

      if (current === undefined) {
        break;
      }
    }

    return current;
  });
};

console.log(array_pluck(testData3, "name"));
console.log(array_pluck(testData3, "skills.php"));

/*12. Создать функцию, которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.*/

const array_combine = (keysArrey, valuesArrey) => {
  const result = {};

  const filterKeysArrey = keysArrey.filter((key) => typeof key === "string" || typeof key === "number");

  for (let i = 0; i < filterKeysArrey.length; i++) {
    result[filterKeysArrey[i]] = valuesArrey[i];
  }

  return result;
};

console.log(array_combine(testData, testData2));

/*3. Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.*/

const MultiplicatorUnitFailure = () => {};

const primitiveMultiply = (a, b) => {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure();
  }
};

const reliableMultiply = (a, b) => {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
};

console.log(reliableMultiply(8, 8));
