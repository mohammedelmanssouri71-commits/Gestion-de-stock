import { BooksContext } from "./Books";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function BooksList(){
    const {livres, setLivres} = useContext(BooksContext);
    const liste = livres.map(book => {
        return (
            <tr key={book.id} className="book">
                <td>
                    <Link to={`bookDetails/${book.id}`}>
                        <img src={book.image} alt="cover-book" loading="lazy"/>
                    </Link>
                </td>

                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>

                <td>
                    <button><Link to={`edit-book/${book.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>
                    <button onClick={() => handleDeleteBook(book.id)}><i className="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>

        )
    })
    function handleDeleteBook(bookId){
        if (window.confirm("Do you want to delete this book?")){
            const newList = livres.filter(b => b.id != bookId);
            setLivres(newList);
            localStorage.setItem("books", JSON.stringify(newList));
        }
    }
    return (
        <table className="books">
            <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
            {liste}
        </table>
    )
}