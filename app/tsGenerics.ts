// Дженерики в тс позволяют писать код, который способен работать с данными разных типов. Это повышает
// переиспользоваемость и масштабированность кода


// 1 пример - мерж объекта
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: "Alice" }
const obj2 = { age: "25" }

const merged = merge(obj1, obj2)
console.log(merged) // { name: "Alice", age: "25" }


// 2 пример - фильтрация массива по заданному ключу и значению
function filterByKey<T, U extends keyof T>(arr: Array<T>, key: U, value: T[U]): Array<T> {
  return arr.filter((item) => item[key] < value)
}

interface Person {
  name: string;
  age: number;
}

interface Car {
  brand: string;
  year: number;
}

const people: Array<Person> = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Eve', age: 35 },
];

const cars: Array<Car> = [
  { brand: 'Toyota', year: 2017 },
  { brand: 'Ford', year: 2020 },
];

const youngPeople = filterByKey(people, 'age', 30); // Возвращает людей младше 30 лет
const oldCars = filterByKey(cars, 'year', 2019); // Возвращает автомобили до 2019г выпуска

console.log(youngPeople); // [{ name: 'Alice', age: 25 }]
console.log(oldCars); // [{ brand: 'Toyota', year: 2017 }]

