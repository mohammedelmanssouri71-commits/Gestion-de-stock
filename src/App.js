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
function App() {
  const [livres, setLivres] = useState([]);
  useEffect(() => {
    const library_books = localStorage.getItem("books");
    if (library_books) {
      setLivres(JSON.parse(library_books));
    } 
  }, [])
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(livres))
  }, [livres])
  return (
    <BooksContext.Provider value={{livres, setLivres}}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='books' element={<BooksList/>} />
          <Route path='/books/bookDetails/:id' element={<BookDetails/>} />
          <Route path='/books/edit-book/:id' element={<EditBook/>} />
          <Route path='add-book' element={<AddBook/>}/>
        </Routes>
      </div>
    </BooksContext.Provider>
  );
}

export default App;
