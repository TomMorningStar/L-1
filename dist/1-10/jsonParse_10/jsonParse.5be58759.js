// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями. 
function customJSONParse(jsonString) {
    let index = 0;
    function parseValue() {
        const char = jsonString[index];
        if (char === "t") {
            index += 4;
            return true;
        }
        if (char === "f") {
            index += 5;
            return false;
        }
        if (char === "n") {
            index += 4;
            return null;
        }
        if (char === '"') {
            const start = ++index;
            while(jsonString[index] !== '"')index++;
            const value = jsonString.slice(start, index); // Get string
            index++;
            return value;
        }
        if (char === "{") {
            const obj = {};
            index++;
            while(jsonString[index] !== "}"){
                const key = parseValue();
                index++; // Skip colon
                const value = parseValue();
                obj[key] = value;
                if (jsonString[index] === ",") index++;
            }
            index++;
            return obj;
        }
        if (char === "[") {
            const arr = [];
            index++;
            while(jsonString[index] !== "]"){
                arr.push(parseValue());
                if (jsonString[index] === ",") index++;
            }
            index++;
            return arr;
        }
        const start = index;
        while(jsonString[index] !== "," && jsonString[index] !== "]" && jsonString[index] !== "}" && jsonString[index] !== undefined)index++;
        const numStr = jsonString.slice(start, index).trim();
        return parseFloat(numStr);
    }
    return parseValue();
}
const jsonString = '{"title":"Совещание","occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],"place":{"number":23}}';
console.log(customJSONParse(jsonString)); // { title: 'Совещание', occupiedBy: [ { name: 'Иванов' }, { name: 'Петров' } ], place: { number: 23 } }
console.log(JSON.parse(jsonString)); // { title: 'Совещание', occupiedBy: [ { name: 'Иванов' }, { name: 'Петров' } ], place: { number: 23 } }

//# sourceMappingURL=jsonParse.5be58759.js.map
