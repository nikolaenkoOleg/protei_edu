// WeakSet в качестве значений может иметь только объекты. Как и в WeakMap если эти объекты будут удалены, то они также удаляться из коллекции WeakSet.
// Размер WeakSet также нельзя определить

let obj1 = { id: 1 }
const obj2 = { id: 2 }

const set = new Set()

set.add(obj1).add(obj2)

obj1 = null

console.log(set) // { { id: 1 }, { id: 2 } } obj1 удалили, но в set он остался

let obj3 = { id: 3 }
const obj4 = { id: 4 }

const weakSet = new WeakSet()

weakSet.add(obj3).add(obj4)

obj3 = null

console.log(weakSet.has(obj3)) // false, так obj3 удалили и сборщик автоматически удалил этот объект из WeakSet

