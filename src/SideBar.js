import profil from "./assets/profil.jpg";
export default function SideBar(){
    return (
        <div className="side-bar">
            <form>
                <input type="search" placeholder="Search books, users or borrowing records"/>
            </form>
            <div style={{display: "flex", gap: "30px"}}>
                <div>
                    <img src={profil} alt="profil"/>
                </div>
                <button><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>
        </div>
    )
}