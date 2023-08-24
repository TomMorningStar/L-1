// Реализовать функцию конвертации JSON в строку
function jsonStringify(obj) {
    if (typeof obj === "string") return `"${obj}"`;
    if (typeof obj === "number" || typeof obj === "boolean" || obj === null) return `${obj}`;
    if (Array.isArray(obj)) return `[${obj.map((item)=>jsonStringify(item))}]`; // рекурсивно вызываем функцию для каждого элемента массива
    if (typeof obj === "object") {
        const keys = Object.keys(obj);
        return `{${keys.map((key)=>`"${key}":${jsonStringify(obj[key])}`)}}`; // рекурсивно вызываем функцию для каждого свойства объекта
    }
    return undefined; // если не строка, не число, не булево, не null, не массив и не объект, то возвращаем undefined
}
const room = {
    number: 23
};
const meetup = {
    title: "Совещание",
    occupiedBy: [
        {
            name: "Иванов"
        },
        {
            name: "Петров"
        }
    ],
    place: room
};
console.log(jsonStringify(meetup)); // {"title":"Совещание","occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],"place":{"number":23}}
console.log(JSON.stringify(meetup)); // {"title":"Совещание","occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],"place":{"number":23}}

//# sourceMappingURL=jsonStringify.e5430b1c.js.map
