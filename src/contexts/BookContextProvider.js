import { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

// creating the context
export const BookContext = createContext();

export default function BookContextProvider(props) {
    // Note: The third parameter of the useReducer overrides the initial state in the second parameter
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        // storing the data inside the localstorage of the browser when the data changes
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);
    return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
}
