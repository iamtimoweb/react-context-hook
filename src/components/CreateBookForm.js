import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContextProvider";

export default function CreateBookForm() {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const book = { title, author };
        dispatch({ type: "ADD_BOOK", book });

        // rest the state after form submission
        setTitle("");
        setAuthor("");
    }
    return (
        <div className="card border-0 mt-3">
            <div className="card-header p-3 bg-white">Add Book</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="title" placeholder="Enter the title for the book" onChange={(e) => setTitle(e.target.value)} value={title} required />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="author" placeholder="Enter the author of the book" onChange={(e) => setAuthor(e.target.value)} value={author} required />
                        <label htmlFor="author">Author</label>
                    </div>
                    <button className="btn btn-primary w-100 btn-lg" type="submit">
                        Save Book
                    </button>
                </form>
            </div>
        </div>
    );
}
