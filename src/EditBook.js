import { useParams } from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import { BooksContext } from "./Books";
import Alert from "./Alert";


export default function EditBook(){
    let {id} = useParams();
    const {livres, setLivres} = useContext(BooksContext);
    const book = livres.find(b => b.id == id); 
    console.log(book);
    const categoryRef = useRef();
    const descRef = useRef();
    const isbnRef = useRef();
    const copiesRef = useRef();
    const avCopiesRef = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [typeAlert, setType] = useState("");
    const [msg, setMsg] = useState("");
    useEffect(() => {
        categoryRef.current.focus();
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
        }, 3500);
    }, [showAlert])
    function handleSubmit(e) {
        e.preventDefault();
        setShowAlert(true);
        if (categoryRef.current.value != "" && descRef.current.value != "" && isbnRef.current.value != "" && copiesRef.current.value != "" && avCopiesRef.current.value != ""){
            const updated = livres.map(b => 
                b.id == id
                ? {
                    ...b,
                    category: categoryRef.current.value,
                    isbn: isbnRef.current.value,
                    desc: descRef.current.value,
                    total_number_of_copies: copiesRef.current.value,
                    number_of_available_copies: avCopiesRef.current.value
                }
                : b
            );

            setLivres(updated);
            localStorage.setItem("books", JSON.stringify(updated));
            setMsg("The book is updated successfully");
            setType("success");
        }else{
            setMsg("Some required information is missing");
            setType("error");
        }
    }
    return (
        <div>
            {showAlert?<Alert type={typeAlert} message={msg}/>:<div></div>}
            <form className="edit-form" onSubmit={handleSubmit}>
                <div>
                    <img src={book.image} alt="cover-book" />
                    <div>
                        <input type="file"/>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Title</label><br/>
                        <input value={book.title} readOnly/>
                    </div>
                    <div>
                        <label>Author</label><br/>
                        <input value={book.author} readOnly/>
                    </div>
                    <div>
                        <label>Category</label><br/>
                        <input ref={categoryRef} defaultValue={book.category}/>
                    </div>
                    <div>
                        <label>ISBN</label><br/>
                        <input ref={isbnRef} defaultValue={book.isbn}/>
                    </div>
                    <div>
                        <label>Number of copies</label><br/>
                        <input type="number" ref={copiesRef} defaultValue={book.total_number_of_copies}/>
                    </div>
                    <div>
                        <label>Number of available copies</label><br/>
                        <input type="number" ref={avCopiesRef} defaultValue={book.number_of_available_copies}/>
                    </div>
                    <div>
                        <label>Description</label><br/>
                        <textarea ref={descRef} defaultValue={book.desc}></textarea>
                    </div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>

    )
}