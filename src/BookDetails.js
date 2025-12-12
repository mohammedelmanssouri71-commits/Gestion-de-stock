import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BooksContext } from "./Books";

export default function BookDetails(){
    let {id} = useParams();
    let {livres, setLivres} = useContext(BooksContext);
    let book = livres.find(b => b.id == id);
    return (
        <div style={{width: "70vw", margin: "20px auto"}}>
            <h2>Books Details</h2>
            <div className="book-details">
                <img src={book.image} alt="image" />
                <div>
                    <h3 className="title">{book.title}</h3>
                    <p className="author">{book.author} - {book.year}</p>
                    <div className="infos">
                        <div><span>Category:</span> {book.category}</div>
                        <div><span>ISBN:</span> {book.isbn}</div>
                    </div>
                    <div>
                        <p>Number of copies: {book.total_number_of_copies}</p>
                        <p>Number of available copies: {book.number_of_available_copies}</p>
                    </div> 
                    <div>
                        <h3>Description</h3>
                        <p>{book.desc}</p>
                    </div>
                    <button className="borrowBtn"><Link to="borrow-book" style={{textDecoration: "none", color: "white"}}>Borrow Book</Link></button>
                </div>
            </div>
        </div>
    )
}