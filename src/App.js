import './App.css';
import Navbar from './Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { BooksContext } from './Books';
import BooksList from './BooksList';
import BookDetails from './BookDetails';
import AddBook from './AddBook';
import { useState, useEffect } from 'react';
import EditBook from './EditBook';
import SideBar from './SideBar';
import Users from './Users';
import BorrowBook from './BorrowBook';
import NotFound from './NotFound';
import Auth from './Auth';
import { UsersContext } from './UsersContext';
import BorrowingReturns from './BorrowingReturns';
import { AdminsContext } from './AdminsContext';
import { AuthContext } from './AuthContext';
import profil from './assets/profil.jpg';
import profil1 from './assets/profil1.jpg';
function App() {
  const [livres, setLivres] = useState(JSON.parse(localStorage.getItem("books")) || []);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [admins, setAdmins] = useState([{id: 1, fullName: "Mohamed Ali",username: "admin", email: "alimoha@gmail.com", profil: profil,password: "admin"}, {id: 2, fullName: "Hicham Mimati",username: "admin1", email: "mimati300@gmail.com", profil: profil1,password: "admin1"}]);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(livres))
  }, [livres])
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])
  useEffect(() => {
    localStorage.setItem("admins", JSON.stringify(admins))
  }, [admins])
  const [isConnected, setIsConnected] = useState(false);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if(!isConnected){
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <AuthContext.Provider value={{isConnected, setIsConnected}}>
    <BooksContext.Provider value={{livres, setLivres}}>
      <UsersContext.Provider value={{users, setUsers}}>
        <AdminsContext.Provider value={{admins, setAdmins}}>
          <div className="App">
            {/* <Routes>
              <Route path="/login" element={<Auth/>}/>
              <Route path="/library" element={<Layout/>}>
                <Route path="books">
                  <Route index element={<BooksList />} />
                  <Route path="bookDetails/:id/">
                    <Route index element={<BookDetails/>}/>
                    <Route path='borrow-book' element={<BorrowBook/>} />
                  </Route>
                  <Route path="edit-book/:id" element={<EditBook/>} />
                </Route>
                <Route path='library/add-book' element={<AddBook/>}/>
                <Route path='library/users' element={<Users/>}/>
                <Route path='library/borrowing-returns' element={<BorrowingReturns/>}/>
                <Route path="*" element={<NotFound type="error" searchQuery=""/>} />
              </Route>
            </Routes> */}
            {isConnected? 
            <div>
              <Navbar/>
              <div className='main-content'>
                <SideBar/>
                <Routes>
                  <Route path="/books">
                    <Route index element={<BooksList />} />
                    <Route path="bookDetails/:id/">
                      <Route index element={<BookDetails/>}/>
                      <Route path='borrow-book' element={<BorrowBook/>} />
                    </Route>
                    <Route path="edit-book/:id" element={<EditBook/>} />
                  </Route>
                  <Route path='add-book' element={<AddBook/>}/>
                  <Route path='users' element={<Users/>}/>
                  <Route path='borrowing-returns' element={<BorrowingReturns/>}/>
                  <Route path="*" element={<NotFound type="error" searchQuery=""/>} />
                </Routes>
              </div>
            </div>:<Auth/>
            }
          </div>
        </AdminsContext.Provider>
      </UsersContext.Provider>
    </BooksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
