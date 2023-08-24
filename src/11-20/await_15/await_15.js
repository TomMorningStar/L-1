// Задача на асинхронность: напишите асинхронную функцию, которая использует
//  ключевое слово await для ожидания выполнения других асинхронных операций,
//   и возвращает результат выполнения.

async function wait() {
  console.log(1);

  await new Promise((resolve) => setTimeout(() => {
    resolve(console.log('Hello'));
  }, 1000));

  console.log(2);

  return 3;
}

function f() {
  wait().then((result) => console.log(result));
}

f(); // 1 Hello 2 3 // Запуск модуля асинхронности
