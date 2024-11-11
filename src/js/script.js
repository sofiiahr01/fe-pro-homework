import PrintedBook from './PrintedBook.js';
import Ebook from './Ebook.js';

const printedBook = new PrintedBook("Кобзар", "Тарас Шевченко", 1840, 300);
console.log(printedBook.info);
console.log(printedBook.getDescription());

const ebook = new Ebook("Захар Беркут", "Іван Франко", 1883, 5);
console.log(ebook.info);
console.log(ebook.getDescription());
