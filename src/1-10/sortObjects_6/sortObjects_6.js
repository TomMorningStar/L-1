// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }.
//  Напишите код, который сортирует этот массив по возрастанию возраста,
//   а при равных возрастах сортирует по алфавиту по полю name.

const arr = [
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Ann',
    age: 25
  },
  {
    name: 'Bob',
    age: 20
  },
  {
    name: 'Jack',
    age: 20
  }
];


function sortObjects(arr) {
  return arr.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name)); // сортировка по возрасту и по имени
}

console.log(sortObjects(arr)); // [ { name: 'Bob', age: 20 }, { name: 'Jack', age: 20 }, { name: 'Ann', age: 25 }, { name: 'John', age: 25 } ]
