// у WeakMap ключами могут быть только объекты. И если эти объекты будут удалены в процессе выполнения кода, то эти ключи
// и значения по ним также будут удалены из WeakMap. Так же у WeakMap нет методов, которые позволяют узнать размер коллекции или работать сразу со всеми ее элементами

let obj = {}

const m = new Map()
m.set(obj, "value")

obj = null

console.log(m.size) // 1
console.log(m) // { {} => 'str' } объект удалился, но в мапе он остался. Но доступ к значению 'value' получить уже нельзя.

let wmObj = {}

const wm = new WeakMap()
wm.set(wmObj, "weakMap")

wmObj = null

console.log(wm.get(wmObj)) // объект удалился, и в WeakMap его вместе со значением "weakMap" удалил сборщик мусора.



