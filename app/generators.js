// Генераторы - вид функций, который возвращают поток данных, а не просто значение. Могут приостанавливать свое выполнение и потом продолжать его
// Ключевое слово yield - с помощью него из генератора можно вернуть значение
// Метод next позволяется "сделать шаг" работы генератора и получить значение, которое возвращается через yield

function* generateSequence() {
  yield 1
}
const generator = generateSequence()
console.log(generator.next()) // { value: 1, done: false }
console.log(generator.next()) // { value: 1, done: false }

// После того как генератор вернет все значения, то в done будет значение true, а состояние генератора будет close. Доступно 3 состояния генератора: suspended - приостановлен, executing - выполняется и close - завершён.

// Генератор возвращает итератор, поэтому, чтобы получить значение из генератора, можно использовать спред оператор или цикл for of

function* getNumbers() {
  yield 1
  yield 2
  yield 3
}

console.log([...getNumbers()]) //[ 1, 2, 3 ]

for (const number of getNumbers()) {
  console.log(number) // 1 2 3
}

// Также у генератора есть методы return() - позволяет вернуть значение и завершить итерацию и throw() с помощью которого можно выбросить исключение и завершить итерацию

// Одни генераторы можно вызывать внутри других используя yield*. Это называется композиция генераторов

function* getNumbers2() {
  yield 1
  yield 2
  yield 3
}

function* getNumbers3() {
  yield 4
  yield 5
  yield 6
}

const firstNumbersGenerator = getNumbers2()
const secondNumbersGenerator = getNumbers3()

function* getALlNumbers() {
  yield* firstNumbersGenerator
  yield* secondNumbersGenerator
}

console.log([...getALlNumbers()]) // [ 1, 2, 3, 4, 5, 6 ]


// С помощью next можно также передавать значения внутрь генератора

function* quizPlease() {
  const q = yield console.log("2 + 2?")
  if (q === 4) {
    console.log("4 is correct")
  } else {
    console.log("incorrect")
  }
}

const gen = quizPlease()
gen.next() // первый next не принимает значение, а выводит вопрос
gen.next(4)
