import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { books } from './Books';
import BooksList from './BooksList';
import BookDetails from './BookDetails';
function App() {
  const livres = [
  {
    "id": 1,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "category": "Programmation",
    "availability": true,
    "desc": "Un guide essentiel pour écrire du code propre, lisible et maintenable.",
    "year": 2008,
    "isbn": "9780132350884",
    "image": "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
  },
  {
    "id": 2,
    "title": "The Pragmatic Programmer",
    "author": "Andrew Hunt & David Thomas",
    "category": "Développement logiciel",
    "availability": true,
    "desc": "Un livre culte qui enseigne les bonnes pratiques pour devenir un développeur pragmatique.",
    "year": 1999,
    "isbn": "9780201616224",
    "image": "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg"
  },
  {
    "id": 3,
    "title": "You Don't Know JS: Scope & Closures",
    "author": "Kyle Simpson",
    "category": "JavaScript",
    "availability": false,
    "desc": "Une exploration profonde des mécanismes internes de JavaScript.",
    "year": 2014,
    "isbn": "9781491904152",
    "image": "https://covers.openlibrary.org/b/isbn/9781491904152-L.jpg"
  },
  {
    "id": 4,
    "title": "Design Patterns",
    "author": "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    "category": "Architecture logicielle",
    "availability": true,
    "desc": "Le livre fondateur présentant 23 patrons de conception.",
    "year": 1994,
    "isbn": "9780201633610",
    "image": "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg"
  },
  {
    "id": 5,
    "title": "Introduction to Algorithms",
    "author": "Thomas H. Cormen",
    "category": "Algorithmes",
    "availability": true,
    "desc": "La référence incontournable pour comprendre et implémenter des algorithmes complexes.",
    "year": 2009,
    "isbn": "9780262033848",
    "image": "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg"
  },
  {
    "id": 6,
    "title": "Eloquent JavaScript",
    "author": "Marijn Haverbeke",
    "category": "JavaScript",
    "availability": false,
    "desc": "Un livre pédagogique et moderne pour apprendre JavaScript en profondeur.",
    "year": 2018,
    "isbn": "9781593279509",
    "image": "https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg"
  },
  {
    "id": 7,
    "title": "Cracking the Coding Interview",
    "author": "Gayle Laakmann McDowell",
    "category": "Préparation d'entretien",
    "availability": true,
    "desc": "Le guide ultime pour réussir les entretiens techniques.",
    "year": 2015,
    "isbn": "9780984782857",
    "image": "https://covers.openlibrary.org/b/isbn/9780984782857-L.jpg"
  },
  {
    "id": 8,
    "title": "Refactoring",
    "author": "Martin Fowler",
    "category": "Qualité du code",
    "availability": true,
    "desc": "Une approche systématique pour améliorer la structure du code.",
    "year": 2019,
    "isbn": "9780134757592",
    "image": "https://covers.openlibrary.org/b/isbn/9780134757592-L.jpg"
  },
  {
    "id": 9,
    "title": "The Phoenix Project",
    "author": "Gene Kim, Kevin Behr, George Spafford",
    "category": "DevOps",
    "availability": false,
    "desc": "Un roman captivant qui explique les principes DevOps.",
    "year": 2013,
    "isbn": "9780988262591",
    "image": "https://covers.openlibrary.org/b/isbn/9780988262591-L.jpg"
  },
  {
    "id": 10,
    "title": "Deep Work",
    "author": "Cal Newport",
    "category": "Productivité",
    "availability": true,
    "desc": "Un guide pratique pour travailler avec concentration intense.",
    "year": 2016,
    "isbn": "9781455586691",
    "image": "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg"
  }
];

  return (
    <books.Provider value={livres}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='books' element={<BooksList/>} />
          <Route path='/books/bookDetails/:id' element={<BookDetails/>} />
        </Routes>
      </div>
    </books.Provider>
  );
}

export default App;
