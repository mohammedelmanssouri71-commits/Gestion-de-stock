import './AdminProfil.css';

export default function AdminProfil({ref}){
    const connectedAdmin = JSON.parse(localStorage.getItem("admin"));
    return (
        <div className='admin-profil' ref={ref}>
            <img src={connectedAdmin.profil} alt="profil"/>
            <div>
                <h3>{connectedAdmin.fullName}</h3>
                <p>{connectedAdmin.email}</p>
                <p>@{connectedAdmin.username}</p>
            </div>
            <button className="settingsBtn"><i class="fa-solid fa-gear"></i></button>
        </div>
    )
}