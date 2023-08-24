// Реализовать функцию конвертации JSON в строку

function jsonStringify(obj) {
  if (typeof obj === 'string') { // если строка
    return `"${obj}"`;
  }

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) { // если число, булево или null
    return `${obj}`;
  }

  if (Array.isArray(obj)) { // если массив
    return `[${obj.map((item) => jsonStringify(item))}]`; // рекурсивно вызываем функцию для каждого элемента массива
  }

  if (typeof obj === 'object') { // если объект
    const keys = Object.keys(obj);
    return `{${keys.map((key) => `"${key}":${jsonStringify(obj[key])}`)}}`; // рекурсивно вызываем функцию для каждого свойства объекта
  }

  return undefined; // если не строка, не число, не булево, не null, не массив и не объект, то возвращаем undefined
}

const room = {
  number: 23,
};

const meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};


console.log(jsonStringify(meetup)); // {"title":"Совещание","occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],"place":{"number":23}}

console.log(JSON.stringify(meetup)); // {"title":"Совещание","occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],"place":{"number":23}}
