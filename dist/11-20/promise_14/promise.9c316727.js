// Задача на промисы: напишите функцию,
//  которая принимает URL изображения и возвращает промис,
//   который разрешается с данными об изображении, когда оно загружено.
//    Когда говорится "промис разрешается с данными об изображении",
//     это означает, что промис должен быть успешно выполнен (resolved)
//      с данными об изображении после того, как изображение будет загружено.
loadImage("https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg").then((data)=>{
    console.log(data);
});
function loadImage(url) {
    return new Promise((resolve, reject)=>{
        const img = document.createElement("img"); // создаем элемент img
        img.src = url; // устанавливаем src
        img.alt = "Image"; // устанавливаем alt
        img.addEventListener("error", ()=>reject(new Error("Image load failed"))); // reject
        img.addEventListener("load", ()=>resolve(img)); // resolve
    });
}

//# sourceMappingURL=promise.9c316727.js.map
