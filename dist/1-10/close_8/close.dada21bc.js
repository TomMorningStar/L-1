// Задача о замыканиях: напишите функцию,
//  которая будет принимать массив функций и возвращать новую функцию,
//   которая вызывает каждую функцию в этом массиве и возвращает массив результатов,
//    полученных после вызова каждой функции.
const close = (arr)=>{
    const newArr = [];
    return ()=>{
        arr.forEach((func)=>newArr.push(func()));
        return newArr;
    };
};
const arr = [
    ()=>1,
    ()=>2,
    ()=>3,
    ()=>4,
    ()=>5,
    ()=>6
];
const funcCollection = close(arr);
console.log(funcCollection()); // 0 1 2 3 4 5

//# sourceMappingURL=close.dada21bc.js.map
