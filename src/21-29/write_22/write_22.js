// Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат

function countDocumentWrites() {
  let count = 0;

  function tryDocumentWrite() {
    try {
      document.write(`Попытка номер ${count + 1}<br>`);
      count++;
      tryDocumentWrite();
    } catch (error) {
      console.log(`Максимальное количество вызовов document.write(): ${count}`);
    }
  }

  tryDocumentWrite();
}

countDocumentWrites(); // Запуск модуля подсчета количества вызовов document.write()

// Внутри функции у нас есть переменная count, которая инициализируется значением 0.

//  Она будет использоваться для подсчета успешных вызовов document.write().

// Далее у нас есть функция tryDocumentWrite(), которая пытается вызвать document.write().

// Если вызов прошел успешно, то мы увеличиваем значение count на 1 и вызываем функцию tryDocumentWrite() снова.

// Если вызов document.write() прошел неуспешно, то мы ловим ошибку и выводим в консоль значение count.

// Таким образом, мы сможем узнать максимальное количество успешных вызовов document.write().
