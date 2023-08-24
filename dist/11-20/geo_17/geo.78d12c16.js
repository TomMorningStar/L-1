// Необходимо реализовать простое поле ввода адреса с функцией геокодинга:
//  пользователь вводит данные в поле с помощью одного из геоинформационных
//   сервисов (Яндекс.Карты), подбирается адрес.
//    Найденные данные должны отображаться в выпадающем списке, из
//     которого можно выбрать подходящее значение.
function geo() {
    document.querySelector(".geo-container").style.display = "block";
    // Инициализация Яндекс.Карт и Яндекс.Саджест
    ymaps.ready(()=>{
        const addressInput = document.getElementById("addressInput");
        const suggestions = document.getElementById("suggestions");
        const debounce = (func, delay)=>{
            let timer;
            return function() {
                const context = this;
                const args = arguments;
                clearTimeout(timer);
                timer = setTimeout(()=>{
                    func.apply(context, args);
                }, delay);
            };
        };
        const throttledSuggest = debounce((request)=>{
            ymaps.suggest(request).then((results)=>{
                suggestions.innerHTML = ""; // Очищаем предыдущие предложения
                results.forEach((result)=>{
                    const suggestionItem = document.createElement("div");
                    suggestionItem.classList.add("suggestion-item");
                    suggestionItem.textContent = result.value;
                    suggestions.appendChild(suggestionItem);
                    suggestionItem.addEventListener("click", ()=>{
                        addressInput.value = result.value;
                        suggestions.innerHTML = ""; // Закрываем выпадающий список после выбора
                    });
                });
            });
        }, 300); // Задержка в миллисекундах
        addressInput.addEventListener("input", (e)=>{
            const inputValue = e.target.value;
            if (inputValue.length >= 3) throttledSuggest(inputValue);
            else suggestions.innerHTML = ""; // Очищаем предложения, если ввод короче 3 символов
        });
    });
}
geo(); // Запуск модуля геокодинга адресов

//# sourceMappingURL=geo.78d12c16.js.map
