import { UsersContext} from "./UsersContext";
import { useContext, useState } from "react";
import profil from "./assets/profil.jpg";
import AddUser from "./AddUser";

export default function Users(){
    const {users, setUsers} = useContext(UsersContext);
    const [showForm, setShowForm] = useState(false);
    const usersList = users.map(u => {
        let status = u.borrowing.length > 0 ? u.borrowing[u.borrowing.length - 1].status : "No borrowing";
        let styleStatus = {}
        if (status == "Late"){
            styleStatus = {
                backgroundColor: "rgba(248, 96, 91, 0.5)",
                color: "red"
            }
        }
        else if (status == "Returned"){
            styleStatus = {
                backgroundColor: "rgba(91, 248, 91, 0.5)",
                color: "green"
            }
        } else if (status == "Borrowed"){
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
            <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.borrowing.length}</td>
                <td><p style={styleStatus} className="borrowing-status">{status}</p></td>
            </tr>
        )
    })
    return (
        <>
            {showForm && <AddUser showAddForm={setShowForm}/>}
            <div className="user-manage">
                <div>
                    <h2>Users Management</h2>
                    <form>
                        <input type="search" placeholder="Search by name or email"/>
                    </form>
                </div>
                <button className="borrowBtn" onClick={() => setShowForm(true)}><i class="fa-solid fa-plus"></i>Add New User</button>
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