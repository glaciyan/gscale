import { Item } from "./Item";

export class AlternatingBooks {
  constructor(books: Item[]) {
    this.books = books;
  }

  books: Item[];

  get(index: number) {
    return this.books[index % 3];
  }
}
