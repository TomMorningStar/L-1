// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).
function measureStackSize() {
    let stackSize = 0;
    function recurse() {
        stackSize++;
        recurse();
    }
    try {
        recurse();
    } catch (error) {
        console.log("Максимальный размер стека вызовов:", stackSize);
    }
}
measureStackSize(); // Запуск модуля измерения размера коллстэка

//# sourceMappingURL=callStack.f43dcbd1.js.map
