import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBooks from './pages/DeleteBooks';
import EditBooks from './pages/EditBooks';
import ShowBooks from './pages/ShowBooks';
import Header from './components/Header';
import ShowAllBooks from './pages/ShowAllBooks';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books/create' element={<CreateBooks />}></Route>
        <Route path='/books/delete/:id' element={<DeleteBooks />}></Route>
        <Route path='/books/edit/:id' element={<EditBooks />}></Route>
        <Route path='/books/details/:id' element={<ShowBooks />}></Route>
        <Route path='/books/details/all' element={<ShowAllBooks/>}></Route>
      </Routes>
    </>
  )
}

export default App;