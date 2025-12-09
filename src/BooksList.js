import { books } from "./Books";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function BooksList(){
    const booksList = useContext(books);
    const liste = booksList.map(book => {
        return (
            <tr key={book.id} className="book">
                <td>
                    <Link to={`bookDetails/${book.id}`}>
                        <img src={book.image} alt="cover-book" />
                    </Link>
                </td>

                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>

                <td style={!book.availability ? {color: 'red'} : {color: 'green'}}>
                    {book.availability ? "Available" : "Borrowed"}
                </td>

                <td>
                    <i className="fa-regular fa-pen-to-square"></i>
                    <i className="fa-regular fa-trash-can"></i>
                </td>
            </tr>

        )
    })
    return (
        <table className="books">
            <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            {liste}
        </table>
    )
}