// Разработайте функцию преобразования JSON в связный список. 
//  На входе функция должна получать JSON,
//   содержащий список объектов, на выходе объект,
//     представляющий из себя односвязный список.
const json = {
    "value": 1,
    "next": {
        "value": 2,
        "next": {
            "value": 3,
            "next": {
                "value": 4,
                "next": {
                    "value": 5
                }
            }
        }
    }
};
function jsonToList(json) {
    let list = {
        value: json.value,
        next: null
    };
    let current = list;
    while(json.next){
        current.next = {
            value: json.next.value,
            next: null
        };
        current = current.next; // {value: 2, next: null}
        json = json.next; // {value: 2, next: {value: 3, next: {value: 4, next: {value: 5}}}}
    }
    return list;
}
console.log(jsonToList(json));

//# sourceMappingURL=jsonList.7eb15daf.js.map
