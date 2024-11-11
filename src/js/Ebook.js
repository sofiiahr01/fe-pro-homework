import Book from './Book.js';

class Ebook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this.fileSize = fileSize;
    }

    get info() {
        return `Title: ${this._title}, Author: ${this._author}, Year: ${this._year}, File Size: ${this._fileSize}MB`;
    }

    getDescription() {
        return `${super.getDescription()} File size is ${this._fileSize} MB.`;
    }

    get fileSize() {
        return this._fileSize;
    }

    set fileSize(value) {
        if (typeof value === 'number' && value > 0) {
            this._fileSize = value;
        } else {
            console.error("File size must be a positive number.");
        }
    }
}

export default Ebook;
