import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { BooksContext } from './Books';
import BooksList from './BooksList';
import BookDetails from './BookDetails';
import AddBook from './AddBook';
import { useState, useEffect } from 'react';
import EditBook from './EditBook';
import SideBar from './SideBar';
import Users from './Users';
import { UsersContext } from './UsersContext';
function App() {
  const [livres, setLivres] = useState([]);
  const [users, setUsers] = useState([
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    borrowing: [
      {
        book: "The Great Gatsby",
        start_date: "2025-01-10",
        end_date: "2025-01-20",
        status: "returned"
      },
      {
        book: "To Kill a Mockingbird",
        start_date: "2025-02-03",
        end_date: "2025-02-15",
        status: "borrowed"
      }
    ]
  },
  {
    id: 2,
    name: "Mohammed El Manssouri",
    email: "mohammed@example.com",
    borrowing: [
      {
        book: "Clean Code",
        start_date: "2025-02-01",
        end_date: "2025-02-12",
        status: "late"
      }
    ]
  },
  {
    id: 3,
    name: "Sarah Martinez",
    email: "sarah@example.com",
    borrowing: []
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    borrowing: [
      {
        book: "JavaScript: The Good Parts",
        start_date: "2025-01-25",
        end_date: "2025-02-05",
        status: "returned"
      },
      {
        book: "Design Patterns",
        start_date: "2025-02-10",
        end_date: "2025-02-25",
        status: "borrowed"
      }
    ]
  }
]
);
  useEffect(() => {
    const library_books = localStorage.getItem("books");
    if (library_books) {
      setLivres(JSON.parse(library_books));
    } 
  }, [])
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(livres))
  }, [livres])
  // useEffect(() => {
  //   const library_users = localStorage.getItem("users");
  //   if (library_users) {
  //     setUsers(JSON.parse(library_users));
  //   } 
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users))
  // }, [users])
  return (
    <BooksContext.Provider value={{livres, setLivres}}>
      <UsersContext.Provider value={{users, setUsers}}>
      <div className="App">
        <Navbar/>
        <div className='main-content'>
          <SideBar/>
          <Routes>
            <Route path='books' element={<BooksList/>} />
            <Route path='/books/bookDetails/:id' element={<BookDetails/>} />
            <Route path='/books/edit-book/:id' element={<EditBook/>} />
            <Route path='add-book' element={<AddBook/>}/>
            <Route path='users' element={<Users/>}/>
          </Routes>
        </div>
      </div>
      </UsersContext.Provider>
    </BooksContext.Provider>
  );
}

export default App;
