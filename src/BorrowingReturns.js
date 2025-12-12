import { UsersContext } from "./UsersContext";
import { BooksContext } from "./Books";
import { useContext, useState } from "react";

export default function BorrowingReturns(){
    const {livres, setLivres} = useContext(BooksContext);
    const {users, setUsers} = useContext(UsersContext);
    const borrowingBooks = [];
    users.forEach(u => {
        u.borrowing.forEach(br => {
            borrowingBooks.push({
                id: br.id,
                user: u.name,
                book: livres.find(b => b.id === br.bookId).title,
                startDate: br.startDate,
                endDate: br.endDate,
                status: br.status
            })
        })
    })
    const borrowingList = borrowingBooks.map(br => {
        let styleStatus = {}
        if (br.status == "Late"){
            styleStatus = {
                backgroundColor: "rgba(248, 96, 91, 0.5)",
                color: "red"
            }
        }
        else if (br.status == "Returned"){
            styleStatus = {
                backgroundColor: "rgba(91, 248, 91, 0.5)",
                color: "green"
            }
        } else if (br.status == "Borrowed"){
            styleStatus = {
                backgroundColor: "rgba(36, 94, 255, 0.5)",
                color: "white"
            }
        }else{
            styleStatus = {
                backgroundColor: "rgba(250, 142, 80, 0.5)",
                color: "white"
            }
        }
        return (
            <tr key={br.id}>
                <td>{br.user}</td>
                <td>{br.book}</td>
                <td>{br.startDate}</td>
                <td>{br.endDate}</td>
                <td><p style={styleStatus} className="borrowing-status">{br.status}</p></td>
                <td><button disabled={br.status === "Returned"} className="returnBtn" onClick={() => handleReturnBook(br)}>Return</button></td>
            </tr>
        )
    })
    function handleReturnBook(br){
            setUsers(users.map(user => {
                if(user.borrowing.some(b => b.id === br.id)){
                    let bor = user.borrowing.find(b => b.id === br.id);
                    let newBorrowing = user.borrowing.filter(b => b.id !== bor.id);
                    let newBor = {
                        ...bor,
                        status: "Returned"
                    };
                    newBorrowing.push(newBor);
                    return {
                        ...user,
                        borrowing: newBorrowing
                    }
                }else{
                    return user;
                }
            }))
            setLivres(livres.map(book => {
                if (book.title === br.book){
                    return {
                        ...book,
                        number_of_available_copies: parseInt(book.number_of_available_copies) + 1
                    }
                }else{
                    return book;
                }
            }))
    }
    return (
        <div className="borrowing-returns">
            <div>
                <h2>Borrowing & Returns</h2>
                <p>This space allows you to borrow and return books easily, while tracking your borrowing status in real time.</p>
                <form>
                    <input type="search" placeholder="Search by book or user"/>
                </form>
            </div>
            <table>
                <tr>
                    <th>User</th>
                    <th>Book</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                {borrowingList}
            </table>
        </div>
    )
}