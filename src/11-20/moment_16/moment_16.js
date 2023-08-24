// Задача на модули и использование внешних библиотек: напишите модуль,
//  который экспортирует функцию для работы с датами.Внутри модуля
//   используйте внешнюю библиотеку Moment.js для удобной работы с датами.

import moment from 'moment';

function formatDate(format, date) {
  return moment(date).format(format);
}

console.log(formatDate('DD/MM/YYYY', new Date())); // 02/10/2017 // Запуск модуля работы с датами
