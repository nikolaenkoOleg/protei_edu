// Очередность выполнения кода, включая setTimeout, requestAnimationFrame, Promise.then

// 1. Сначала исполняется синхронный код и основного стека
// 2. Потом выполняются микро задачи, типа промисов, кода добавленого через queueMicrotask
// 3. Затем, скорее всего выполнится код из requestAnimationFrame, так как requestAnimationFrame специально оптимизирован так,
// чтобы выполнится перед отрисовкой кадра
// 4. После чего выполнится код и очереди макро задач.

console.log('1');

setTimeout(function() {
  console.log('2');
}, 0);

Promise.resolve().then(function() {
  console.log('3');
});

requestAnimationFrame(function() {
  console.log('4');
});

console.log('5');

// Вывод: 1,5,3,4,2
