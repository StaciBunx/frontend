"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
Если книга с таким названием уже существует в списке, выбросьте ошибку с
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в
библиотеке и возвращать true или false в зависимости от того, есть ли такая
книга в списке или нет.
*/

class Library {
    #books = [];

    constructor(books) {
        this.checkDuplicates(books);
        this.#books = books;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        try {
            if (this.hasBook(title)) {
                throw new Error(`Книга "${title}" уже есть в списке`);
            }
            this.#books.push(title);
            console.log(`Книга "${title}" добавлена`);
        } catch (e) {
            console.log(e.message);
        }
    }

    removeBook(title) {
        try {
            if (!this.hasBook(title)) {
                throw new Error(`Книги "${title}" в списке нет`);
            }
            const bookIndex = this.#books.indexOf(title);
            this.#books.splice(bookIndex, 1);
            console.log(`Книга "${title}" удалена`);
        } catch (e) {
            console.log(e.message);
        }
    }

    hasBook(title) {
        if (this.#books.includes(title)) return true;
        return false;
    }

    checkDuplicates(books) {
        try {
            const booksWithoudDuplicates = [...new Set(books)];
            if (books.length !== booksWithoudDuplicates.length) {
                throw new Error('Ошибка! Уберите дубликаты в списке книг!');

            }
        } catch (e) {
            console.log(e.message);
        }
    }
}


const myBooks1 = ['Каштанка', 'Горе от ума', 'Недоросль', 'Капитанская дочка', 'Каштанка'];
const myLibrary1 = new Library(myBooks1);

const myBooks2 = ['Каштанка', 'Горе от ума', 'Недоросль', 'Капитанская дочка'];
const myLibrary2 = new Library(myBooks2);
console.log(myLibrary2.allBooks);

myLibrary2.addBook('Каштанка');
myLibrary2.addBook('Братья Карамазовы');
console.log(myLibrary2.allBooks);

myLibrary2.removeBook('Му-му');
myLibrary2.removeBook('Горе от ума');
console.log(myLibrary2.allBooks);
