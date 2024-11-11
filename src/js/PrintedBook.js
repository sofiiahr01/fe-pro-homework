import Book from './Book.js';

class PrintedBook extends Book {
    constructor(title, author, year, pageCount) {
        super(title, author, year);
        this.pageCount = pageCount;
    }

    get info() {
        return `Title: ${this._title}, Author: ${this._author}, Year: ${this._year}, Pages: ${this._pageCount}`;
    }

    getDescription() {
        return `${super.getDescription()} It has ${this._pageCount} pages.`;
    }

    get pageCount() {
        return this._pageCount;
    }

    set pageCount(value) {
        if (typeof value === 'number' && value > 0) {
            this._pageCount = value;
        } else {
            console.error("Page count must be a positive number.");
        }
    }
}

export default PrintedBook;
