import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SingleBlog from './Pages/SingleBlog';
import Login from './Pages/Login';
import AddBlog from './Pages/AddBlog';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>      
    <NavBar />
      <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:id" element={<SingleBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>

      <Footer />
    </>

  );
};

export default App;
