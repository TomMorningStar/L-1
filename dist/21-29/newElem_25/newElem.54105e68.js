// Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент,
//  добавляет его в DOM и устанавливает для него стиль с помощью CSS.
function createAndStyleElement(tagName, styles) {
    // Создаем новый элемент с указанным тегом
    const element = document.createElement(tagName);
    // устанавливаем стили элемента
    for(const styleName in styles)if (styles.hasOwnProperty(styleName)) element.style[styleName] = styles[styleName];
    // добавляем элемент в DOM (например, в body)
    document.body.prepend(element);
    return element;
}
// Пример использования:
const styles = {
    width: "200px",
    height: "100px",
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    fontSize: "18px"
};
const newDiv = createAndStyleElement("div", styles);
newDiv.textContent = "Новый элемент";

//# sourceMappingURL=newElem.54105e68.js.map
