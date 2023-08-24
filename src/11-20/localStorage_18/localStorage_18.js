// Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

// Решение

// забить localStorage до максимума и вывести его размер
function getLocalStorageSize() {
  let data = 'a';
  let size = 0;
  try {
    while (true) {
      localStorage.setItem(data, data);
      data += data;
      size += data.length;
    }
  } catch (e) {
    localStorage.removeItem(data);
  }
  return size;
}

console.log(getLocalStorageSize()); // 4194302 // Запуск модуля подсчета размера localStorage
