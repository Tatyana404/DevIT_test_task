# Linux навигация и поиск

## Файловая структура

```
/
--/var/
----/www/
------/html/
--------/index.html
--------/404.html
--------/.htaccess
----/logs/
------/access.log
```

## Задание

Напишите набор команд с комментарием их работы которые вы примените для решения следующих задач:

1. Выведите список всех файлов в папке **html**;
2. Найдите в файле **access.log** все упоминания строки "404";
3. На основании файла **404.html** сделайте файл **403.html** заменив в его содержимом все упоминания 404 на 403;
4. Модифицируйте права доступа и владельца файла **index.html** следующим образом: Текущий пользователь должен иметь права на чтение/запись. Группа www-data на чтение. Все остальные не имеют доступа к файлу;
5. Сделайте символическую ссылку на файл **access.log** в папке **html**;
6. Выведите на экран все файлы в папке **var**;
7. Создайте новый файл **503.html** в папке **html** с следующим содержимым:

```
<html>
    <head>
        <title>503</title>
    </head>
</html>
```

## Пример решения

```
# Упаковать папку logs в архив logs_backup.zip
cd /var/ # Перехожу в папку var
zip -v # Проверяю наличие пакета zip
sudo apt install zip # Устанавливаю пакет zip
zip -r ./logs_backup.zip ./logs # Упаковываю содержимое папки logs в файл logs_backup.zip с флагом -r для рекурсивного добавления файлов
```

# GIT внесение изменений

## Рабочее окружение

У вас чистая операционнная система с установленными программами git, nano, ssh. Ваш публичный ключь уже добавлен к git репозиторию и вы имеете полный доступ на чтение/запись, но он отсутствует на вашем компьютере. Репозиторий: git@example.com:example/test.git Ветки: master, dev, stage, release

## Задание

Внести изменения в ветке dev репозитория git@example.com:example/test.git, добавив в корень файл Readme.md с текстом **### May be in future** и залить их на удаленный репозиторий. Напишите набор команд для решения этой задачи с коментариями.

# CSS, HTML

## Задание

1. Опишите все известные вам способы позиционирования 5 элементов по центру, каждый из которых должен занимать 20%;
2. Опишите все известные вам способы позиционирования модального окна, по центру экрана;
3. Напишите стили для кнопки, которая может иметь несколько состояний: active, disabled, danger. Цвета произвольные;
4. Сверстайте страницу логина, которая должна содержать только форму с полями email, password;

# JS логика

## Данные для заданий

```
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]
let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},{"name":"Dima","email":"dima@example.com","age":34},{"name":"Colya","email":"colya@example.com","age":46},{"name":"Misha","email":"misha@example.com","age":16},{"name":"Ashan","email":"ashan@example.com","age":99},{"name":"Rafshan","email":"rafshan@example.com","age":11},1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]
```

## Задание

1. Напишите функцию **cloneDeep** таким образом, чтобы она была способна клонировать переданный как параметр объект.

2. Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

```
var arrays = [[1, 2, 3], [4, 5], [6]];
// Ваш код
// → [1, 2, 3, 4, 5, 6]
```

3.  Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.

```
function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a \* b;
    else
        throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
    // Ваш код
}
console.log(reliableMultiply(8, 8));
```

4. Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

```
var arr = [1, 2, 3];
arr.append(0);
//[0, 1, 2, 3]
```

5. Выведите все элементы массива используя рекурсию.

```
var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];
fuction recuseLog(_ Ваши атрибуты _) { }
recuseLog(arr);
```

6. Написать функцию для выполнения параллельных вычислений без использования Promise.

```
var a = function(one, two) {
    return one + two
}
var b = function() {
    return false;
}
paralell([[a, [1, 2]], [b]], function(results) {
    console.log(results); // [3, false]
});
```

7. Сделать функцию поиска значений в массиве.

```
Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
Пример:
let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
let result2 = array_find(testData, "Rafshan") // ["Rafshan"]
```

8. Сделать функцию, которая обрезает массив до указанного значения.

```
Синтаксис: array_skip_until(arr: array, value: any): any[]
Пример:
let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, "asd") // []
```

9. Создать функцию, которая нормализует данные в массиве исключая или преобразуя не подходящие.

```
Доступные шаблоны:
'string' => строки,
'number' => числа,
'int' => целые числа,
'float' => числа с плавающей точкой,
'bool' => true | false,
'function' => функция,
'array' => массив,
Object => объект {name: 'string'}
Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
Пример:
let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = array_normalize(testData4, {age: 'float'}) // []
let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
```

10. Сделать функцию, которая возвращает уникальные элементы массива.

```
Синтаксис: array_unique(arr: array): any[]
Пример:
let result = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
```

11. Сделать функцию, которая сможет делать срез данных с ассоциативного массива.

```
Синтаксис: array_pluck(arr: array, path: string): any[]
Пример:
let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]
```

12. Создать функцию, которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.

```
Синтаксис: array_combine(keys: array, values: array): Object
Пример:
let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}
```

# Mongo

## Рабочее окружение

База данных MongoDB содержит коллекции:
posts - Записи -

```
posts - Записи -
{
    "properties": {
        "_id": { "bsonType": "objectId" },
        "title": { "bsonType": "string" },
        "content": { "bsonType": "string" },
        "author": { "bsonType": "string" },
        "like": { "bsonType": "int" },
        "dislike": { "bsonType": "int" }
    }
}
```

Все команды вы выполняете в **mongo shell**

## Задание

Напишите команды для получения следующих значений:

1. Выведите 5 записей из коллекции **posts** пропустив первые 5
2. Выведите все записи у которых **like** больше **100**
3. Добавьте новую запись в коллекцию **posts**
4. Выведите список авторов и их общее количество **like**
