// Прокси объект это обертка вокруг обычного объекта или массива, которая позволяет перехватить внутренние методы и обрабатывать
// разные действия с этими структурами - чтение, запись, удаление элементов и тп. Всего можно обработать до 13 методов, но самые популярные это set и get
// по умолчанию, если базовые методы не переопределены, то работа с прокси объектом никак не отличается от работы с обычным

const obj = {}

const proxyObj = new Proxy(obj, {})
proxyObj.a = 1 // свойство a будет и в proxyObj и в obj

// логирование с помощью прокси

const store = {}

const proxyStore = new Proxy(store, {
  set(target, prop, value) {
    console.log(`Set property= '${prop}' with value= ${value}`)
    return true
  }
})

proxyStore.ids = [1, 2] // Set property= 'ids' with value= 1,2
proxyStore.dates = [new Date, new Date()] // dates' with value= Sun Mar 24 2024 20:29:15 GMT+0300 (Москва, стандартное время),Sun Mar 24 2024 20:29:15 GMT+0300 (Москва, стандартное время)

