import { UsersContext } from "./UsersContext";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "./Books";
import { useParams, useNavigate } from "react-router-dom";
import Alert from "./Alert";
export default function BorrowBook(){
    const d = new Date();
    const {users, setUsers} = useContext(UsersContext);
    const {livres, setLivres} = useContext(BooksContext);
    const [startDate, setStartDate] = useState(toInputDate(d));
    d.setDate(d.getDate() + 3);
    const [endDate, setEndDate] = useState(toInputDate(d));
    const {id} = useParams();
    let book = livres.find(b => b.id === id);
    const [user, setUser] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [typeAlert, setType] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const date = new Date(startDate);
        date.setDate(date.getDate() + 3);
        setEndDate(toInputDate(date));
    }, [startDate])
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 3500);
    }, [showAlert]);
    function toInputDate(d) {
        return d.toISOString().split("T")[0];
    }
    function handleBorrowBook(e){
        e.preventDefault();
        setShowAlert(true);
        if (startDate !== "" && endDate !== "" && user !== ""){
            if (book.number_of_available_copies > 0){
                setUsers(users.map(u => {
                if(u.id === user){
                    return {...u, borrowing: [...u.borrowing, {
                        id: "borrow-" + crypto.randomUUID(),
                        bookId: id,
                        startDate: startDate,
                        endDate: endDate,
                        status: "borrowing"
                    }]};
                }else{
                    return u;
                }
            }))
            setLivres(livres.map(b => {
                if (b.id === id){
                    return {
                        ...b,
                        number_of_available_copies: parseInt(b.number_of_available_copies) - 1
                    }
                }else{
                    return b;
                }
            }))
            setMsg("The book is borrowing successfully!");
            setType("success");
            setTimeout(() => {
                if(id){
                    navigate("/books");
                }
            }, 3500);
            }else{
                setMsg("This book is not available!");
                setType("error");
            }
        }else{
            setMsg("Some required informations are missing!");
            setType("error");
        }
    }
    return (
        <div className="borrow-form">
            {showAlert && <Alert type={typeAlert} message={msg}/>}
            <div>
                <h3>Borrow this Book</h3>
                <img src={book.image} alt="book"/>
            </div>
            <form onSubmit={handleBorrowBook}>
                <div>
                    <label>User:</label><br/>
                    <select value={user} onChange={e => setUser(e.target.value)}>
                        <option value="">--Choose a user--</option>
                        {users.map(u => {
                            return (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Start Date</label><br/>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(prevDate => e.target.value >= toInputDate(new Date())?e.target.value:prevDate)}/>
                </div>
                <div>
                    <label>End Date</label><br/>
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} readOnly/>
                </div>
                <button type="submit" className="borrowBtn">borrow</button>
            </form>
        </div>
    )
}