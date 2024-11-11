
class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this.year = year;
    }

    get info() {
        return `Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`;
    }

    getDescription() {
        return `This is a book titled '${this._title}' by ${this._author}.`;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            console.error("Year must be a positive number.");
        }
    }
}

export default Book;
