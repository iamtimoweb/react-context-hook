import { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

export default function BookDetails({ book }) {
    const { dispatch } = useContext(BookContext);

    const bookDetail = (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{book.title}</div>
                    {book.author}
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => dispatch({ type: "DELETE_BOOK", id: book.id })}>
                    Delete
                </button>
            </li>
        </ul>
    );
    return bookDetail;
}
