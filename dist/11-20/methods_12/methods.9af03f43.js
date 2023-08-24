// Задача на работу с объектами: создайте объект,
//  представляющий собой книгу. Объект должен иметь свойства,
//   такие как: название книги, автор и год издания.
//    Напишите методы для получения и изменения значений свойств книги.
let book = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    year: 1954,
    getTitle: function() {
        return this.title;
    },
    getAuthor: function() {
        return this.author;
    },
    getYear: function() {
        return this.year;
    },
    setTitle: function(title) {
        this.title = title;
    },
    setAuthor: function(author) {
        this.author = author;
    },
    setYear: function(year) {
        this.year = year;
    }
};
console.log(book.getTitle()); // The Lord of the Rings
console.log(book.getAuthor()); // J. R. R. Tolkien
console.log(book.getYear()); // 1954
book.setTitle("The Hobbit");
book.setAuthor("J. R. R. Tolkien");
book.setYear(1937);
console.log(book.getTitle()); // The Hobbit
console.log(book.getAuthor()); // J. R. R. Tolkien
console.log(book.getYear()); // 1937

//# sourceMappingURL=methods.9af03f43.js.map
