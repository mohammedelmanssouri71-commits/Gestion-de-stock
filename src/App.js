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
import BorrowBook from './BorrowBook';
import { UsersContext } from './UsersContext';
import BorrowingReturns from './BorrowingReturns';
function App() {
  const [livres, setLivres] = useState(JSON.parse(localStorage.getItem("books")) || []);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  // useEffect(() => {
  //   const library_books = localStorage.getItem("books");
  //   if (library_books) {
  //     setLivres(JSON.parse(library_books));
  //   } 
  // }, [])
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(livres))
  }, [livres])
  // useEffect(() => {
  //   const library_users = localStorage.getItem("users");
  //   if (library_users) {
  //     setUsers(JSON.parse(library_users));
  //   } 
  // }, [])
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])
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
            <Route path='/books/bookDetails/:id/borrow-book' element={<BorrowBook/>} />
            <Route path='/books/edit-book/:id' element={<EditBook/>} />
            <Route path='add-book' element={<AddBook/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='borrowing-returns' element={<BorrowingReturns/>}/>
          </Routes>
        </div>
      </div>
      </UsersContext.Provider>
    </BooksContext.Provider>
  );
}

export default App;
