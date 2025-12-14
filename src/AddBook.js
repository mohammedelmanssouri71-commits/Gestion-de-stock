import { useState, useEffect, useContext } from "react"
import { BooksContext } from "./Books";
import Alert from "./Alert";
import NotFound from "./NotFound";
import './AddBook.css';
import logo from './assets/open-library-logo.jpg';
export default function AddBook(){
    const [query, setQuery] = useState("Politics");
    const [books, setBooks] = useState([]);
    const [alert, setAlert] = useState(false);
    const [typeAlert, setType] = useState("");
    const [message, setMessage] = useState("");
    const {livres, setLivres} = useContext(BooksContext);
    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?q=${query}`)
            .then(res => res.json())
            .then(data => setBooks(data.docs));
        }, [query]);
    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        },3500)
    }, [alert])
    function handleAddBook(book) {
    const library_books = JSON.parse(localStorage.getItem("books")) || [];
    const livre = {
        id: book.key?.replace("/works/", "") || crypto.randomUUID(),
        image: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://shop.btpubservices.com/Content/images/cover_not_available_720.jpg",

        title: book.title || "Untitled",
        author: book.author_name?.[0] || "Unknown",
        category: book.subject?.[0] || "Uncategorized",
        isbn: book.isbn?.[0] || "N/A",
        year: book.first_publish_year || "Unknown",
        desc: "",
        total_number_of_copies: 0,
        number_of_available_copies: 0
    }
    setAlert(true);
    if (library_books.find(b => b.id == livre.id)) {
        setType("error");
        setMessage(`Whoops — the book "${livre.title}" is already in your collection`);
    }else{
        setType("success");
        setMessage(`The book "${livre.title}" is added successfully`);
        library_books.push(livre);
        setLivres(library_books);
        localStorage.setItem("books", JSON.stringify(library_books));
    }
}

    return (
        <div>
            {alert?<Alert type={typeAlert} message={message}/>:<div></div>}
            <form className="search-bar">
                <div>
                    <h3>Search books on Open Library</h3>
                    <p>You can find more than 1000 books in <b>Open Library</b></p>
                    <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title"/>
                </div>
                <div>
                    <img src={logo} alt="open-library-logo"/>
                </div>
            </form>
            <div className="results">
                <div className="added-books">
                    {books? books.map(b => {
                        return (
                            <div key={b.key} className="added-book">
                            <img 
                            src={b.cover_i?`https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`:"https://shop.btpubservices.com/Content/images/cover_not_available_720.jpg"} alt="cover" loading="lazy"/>
                            <div>
                                <h3>{b.title}</h3>
                                <p>{b.author_name?.[0]}</p>
                            </div>
                            <button onClick={() => handleAddBook(b)}><i class="fa-solid fa-plus"></i></button>
                        </div>
                        )
                    }):<NotFound searchQuery={query}/>}
                </div>
            </div>
        </div>
    )
}