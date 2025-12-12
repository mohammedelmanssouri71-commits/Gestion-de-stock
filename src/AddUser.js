import { useContext, useEffect, useRef, useState } from "react";
import { UsersContext } from "./UsersContext";
import Alert from "./Alert";

export default function AddUser({showAddForm}){
    const {users, setUsers} = useContext(UsersContext);
    const nameRef = useRef();
    const emailRef = useRef();
    const [alert, setAlert] = useState(false);
    const [typeAlert, setType] = useState("");
    const [message, setMessage] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        },3500)
    },[alert])
    function handleAddUser(e){
        e.preventDefault();
        setAlert(true);
        if (emailRef.current.value !== "" && nameRef.current.value !== ""){
            if(users.find(u => u.email === emailRef.current.value)){
                setMessage("A user with this email already exists");
                setType("error");
            }else{
                setMessage("This user is added successfully");
                setType("success");
                setUsers([...users, {
                    id: "user-" + crypto.randomUUID(),
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    borrowing: []
                }])
                console.log(users);
            }
        }else{
            setMessage("Some required information is missing");
            setType("error");
        }

    }
    return (
        <>
            {alert && <Alert type={typeAlert} message={message}/>}
            <div className="form-add-user">
                <h3>Add New User</h3>
                <div className="user-icon">
                    <i class="fa-solid fa-user"></i>
                </div>
                <button className="cancel-icon" onClick={() => showAddForm(false)}>
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
                <form onSubmit={handleAddUser}>
                    <div>
                        <label>Full Name</label><br/>
                        <input type="text" ref={nameRef}/>
                    </div>
                    <div>
                        <label>Email</label><br/>
                        <input type="email" ref={emailRef}/>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    )
}