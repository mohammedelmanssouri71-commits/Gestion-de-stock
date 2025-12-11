import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    return (
        <nav>
            <h1>My Library</h1>
            <div>
                <Link to="/books" className="link"><i class="fa-solid fa-book"></i>Books</Link>
                <Link to="/add-book" className="link"><i class="fa-solid fa-plus"></i>Add Book</Link>
                <Link to="/users" className="link"><i class="fa-regular fa-user"></i>Users</Link>
                <Link to="/borrowing-returns" className="link"><i class="fa-solid fa-arrow-right-arrow-left"></i>Borrowing & Returns</Link>
            </div>
        </nav>
    )
}