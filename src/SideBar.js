import AdminProfil from "./AdminProfil";
import { useState, useEffect, useRef } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
export default function SideBar(){
    const connectedAdmin = JSON.parse(localStorage.getItem("admin"));
    const [showProfil, setShowProfil] = useState(false);
    const buttonRef = useRef();
    const boxRef = useRef();
    const {isConnected, setIsConnected} = useContext(AuthContext);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                boxRef.current &&
                !boxRef.current.contains(e.target) &&
                !buttonRef.current.contains(e.target)
            ) {
                setShowProfil(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    function handleLogOut(){
        setIsConnected(false);
    }
    return (
        <div className="side-bar">
            <form>
                <input type="search" placeholder="Search books, users or borrowing records"/>
            </form>
            <div style={{display: "flex", gap: "30px"}}>
                {showProfil && <AdminProfil ref={boxRef}/>}
                <button onClick={() => setShowProfil(true)} ref={buttonRef}>
                    <img src={connectedAdmin.profil} alt="profil"/>
                </button>
                <button onClick={handleLogOut}><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>
        </div>
    )
}