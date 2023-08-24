// Задача: Создать и добавить элемент с использованием шаблонов:
//  Напишите функцию, которая создает новый элемент с
//   использованием шаблонов (например, с помощью тега <template>) и добавляет его в DOM.


function addElementFromTemplate() {
  const template = document.getElementById('my-template');

  // клонируем содержимое шаблона
  const clone = document.importNode(template.content, true);

  const titleElement = clone.querySelector('h2');
  titleElement.textContent = 'Новый элемент';

  const container = document.getElementById('container');
  container.appendChild(clone);
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addElementFromTemplate);
