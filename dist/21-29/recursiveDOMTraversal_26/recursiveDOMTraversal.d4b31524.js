// Задача: Рекурсивный обход дерева DOM:: Напишите функцию,
//  которая рекурсивно обходит дерево DOM, начиная с указанного элемента, и
//  выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).
function recursiveDOMTraversal(node, action) {
    // выполняем действие с текущим узлом
    action(node);
    // рекурсивно обходим всех детей текущего узла
    const children = node.childNodes;
    for(let i = 0; i < children.length; i++)recursiveDOMTraversal(children[i], action);
}
const rootElement = document.getElementById("root");
const logTagInfo = (node)=>{
    if (node.nodeType === Node.ELEMENT_NODE) console.log("Тег:", node.tagName);
};
recursiveDOMTraversal(rootElement, logTagInfo);

//# sourceMappingURL=recursiveDOMTraversal.d4b31524.js.map
