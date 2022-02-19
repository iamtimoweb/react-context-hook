import { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";
import BooksDetails from "./BookDetails";

export default function BookList() {
    const { books } = useContext(BookContext);
    console.log(books, typeof books)
    const book_details = books.length ? books.map((book) => <BooksDetails book={book} key={book.id} />) : <p className='fw-bold text-center'>No books to read. Hello free time :)</p>;

    return book_details;
}
