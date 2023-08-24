// Задача о коллекции функций: у вас есть массив функций, напишите код,
//  который вызовет каждую функцию в этом массиве и выведет их порядковый номер. Однако,
//   вызов каждой функции должен происходить только после вызова предыдущей функции.
const funcCollection = (arr)=>arr.forEach((func)=>func());
const arr = [
    ()=>console.log("0"),
    ()=>console.log("1"),
    ()=>console.log("2"),
    ()=>console.log("3"),
    ()=>console.log("4"),
    ()=>console.log("5")
];
funcCollection(arr) // 0 1 2 3 4 5
;

//# sourceMappingURL=funcCollection.120fa8d5.js.map
