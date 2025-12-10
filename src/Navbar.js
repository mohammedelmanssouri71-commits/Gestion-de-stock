import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    return (
        <nav>
            <h1>My Library</h1>
            <div>
                <Link to="/books" className="link">Books</Link>
                <Link to="/add-book" className="link">Add Book</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
        </nav>
    )
}