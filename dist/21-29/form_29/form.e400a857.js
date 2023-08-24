// Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы
//  на веб-странице и выполняет определенные действия с этими данными,
//   например, отправляет их на сервер или отображает всплывающее окно с результатами.
function handleSubmit(event) {
    event.preventDefault();
    // получаем данные из формы
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key)=>{
        formDataObject[key] = value;
    });
    // выводим данные
    alert(`Получены следующие данные:\n\nИмя: ${formDataObject.name}\nEmail: ${formDataObject.email}`);
}
const myForm = document.getElementById("my-form");
myForm.addEventListener("submit", handleSubmit);

//# sourceMappingURL=form.e400a857.js.map
