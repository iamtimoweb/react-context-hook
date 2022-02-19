import { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

export default function Navbar() {
    const { books } = useContext(BookContext);
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item text-center">
                <h1>Ninja Reading List</h1>
                <p>
                    Currently you have <span className="text-danger">{books.length}</span> books to get through...
                </p>
            </li>
        </ul>
    );
}
