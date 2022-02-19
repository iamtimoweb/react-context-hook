import BookList from "./components/BookList";
import CreateBookForm from "./components/CreateBookForm";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContextProvider";

export default function App() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <BookContextProvider>
                        <Navbar />
                        <BookList />
                        <CreateBookForm />
                    </BookContextProvider>
                </div>
            </div>
        </div>
    );
}
