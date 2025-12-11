import { UsersContext} from "./UsersContext";
import { useContext, useState } from "react";
import profil from "./assets/profil.jpg";

export default function Users(){
    const {users, setUsers} = useContext(UsersContext);
    console.log(users);
    const usersList = users.map(u => {
        return (
            <tr key={u.id}>
                <td><img src={profil} alt="profil"/>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.borrowing.length}</td>
                <td>{u.borrowing.length > 0 ? u.borrowing[u.borrowing.length - 1].status : "No borrowing"}</td>
            </tr>
        )
    })
    return (
        <>
            <div className="user-manage">
                <h2>Users Management</h2>
                <form>
                    <input type="search" placeholder="Search by name or email"/>
                </form>
            </div>
            <table className="users">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Borrowed Books</th>
                    <th>Last Borrowing Status</th>
                </tr>
                {usersList}
            </table>
        </>
    )
}