import { useContext } from "react";
import { useParams } from "react-router-dom";
import { books} from "./Books";

export default function BookDetails(){
    let {id} = useParams();
    let booksList = useContext(books);
    let book = booksList.find(b => b.id == id);
    const styleAv = {
        padding : "5px",
        borderRadius: "20px",
        color : "green",
        backgroundColor: "rgb(147, 234, 173)",
        marginLeft: "10px"
    };
    const styleBr = {
        padding: "5px",
        borderRadius: "20px",
        color: "red",
        backgroundColor : "pink",
        marginLeft: "10px"
    }
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
                        <div><span>Availability:</span> 
                        <span style={book.availability?styleAv:styleBr}>{book.availability?"Available": "Borrowed"}</span></div>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>{book.desc}</p>
                    </div>
                    <button className="borrowBtn">Borrow Book</button>
                    <button className="returnBtn">Return Book</button>
                </div>
            </div>
        </div>
    )
}