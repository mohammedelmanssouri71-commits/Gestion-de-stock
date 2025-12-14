import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminsContext } from "./AdminsContext";
import { AuthContext } from "./AuthContext";
import './Auth.css';
import Alert from "./Alert";
export default function Auth(){
    const usernameRef = useRef();
    const pswrdRef = useRef();
    const {admins, setAdmins} = useContext(AdminsContext);
    const {isConnected, setIsConnected} = useContext(AuthContext);
    const [alert, setAlert] = useState(false);
    const [typeAlert, setType] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    function handleAuth(e){
        e.preventDefault();
        let username = usernameRef.current.value;
        let password = pswrdRef.current.value;
        setAlert(true);
        admins.forEach(admin => {
            if(admin.username === username && admin.password === password){
                setType("success");
                setMessage("Login successful");
                localStorage.setItem("admin", JSON.stringify(admin));
                setTimeout(() => {
                    setAlert(false);
                    setIsConnected(true);
                    navigate("/books");
                }, 3500);
            }else{
                setType("error");
                setMessage("Invalid email or password");
                setTimeout(() => {
                    setAlert(false);
                }, 3500);
            }
        })
    }
    return (
        <>
            {alert && <Alert type={typeAlert} message={message}/>}
            <div className="auth-container">
                <h1>eLibrary</h1>
                <p>Welcome Back!</p>
                <form onSubmit={handleAuth}>
                    <div>
                        <label>Username</label><br/>
                        <input type="text" ref={usernameRef} placeholder="Enter your username"/>
                    </div>
                    <div>
                        <label>Password</label><br/>
                        <input type="password" ref={pswrdRef} placeholder="Enter password"/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="checkbox"/>
                        <span>Remember me</span>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </>
    )
}