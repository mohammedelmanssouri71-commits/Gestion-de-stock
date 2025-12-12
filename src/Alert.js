

export default function Alert({type, message}){
    const styleAlert = {                  
        padding: "14px 18px",
        borderRadius: "10px",
        border: "1px solid #e4e4e7",    
        fontSize: "0.95rem",
        lineHeight: "1.4",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)", 
        width: "fit-content",
        fontWeight: "200",
        position: "fixed",
        top: "40px",
        left: "calc(50vw + 125px)",
        transform: "translateX(-50%)"
    };
    switch (type) {
        case "error":
            styleAlert.backgroundColor = "rgba(255,0,0,0.1)";
            styleAlert.color = "red";
            break;
        case "success":
            styleAlert.backgroundColor = "rgba(0,255,0,0.1)";
            styleAlert.color = "green";
            break;
        default:
            styleAlert.backgroundColor = "rgba(0,0,255,0.1)";
            styleAlert.color = "blue";
            break;
    }

    return (
        <div style={styleAlert}>
            <p>{message}</p>
        </div>
    )
}