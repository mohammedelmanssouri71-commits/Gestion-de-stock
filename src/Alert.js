

export default function Alert(){
    const styleAlert = {
        backgroundColor: "rgba(255,0,0,0.1)",        
        color: "red",                  
        padding: "14px 18px",
        borderRadius: "10px",
        border: "1px solid #e4e4e7",    
        fontSize: "0.95rem",
        lineHeight: "1.4",
        margin: "12px auto",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)", 
        width: "fit-content"
};


    return (
        <div style={styleAlert}>
            <p>Whoops — this book is already in your collection</p>
        </div>
    )
}