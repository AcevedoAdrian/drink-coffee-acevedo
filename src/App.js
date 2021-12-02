import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Componentes propios
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemsListsContiner from './components/ItemListCotainer/ItemsListsContiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
// Estilos CSS
import './App.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home title='DRINK COFFEE' />} />
          <Route path="/products" element={<ItemsListsContiner title="PRODUCTOS" />} />
          <Route path="/category/:categoryId" element={<ItemsListsContiner title="PRODUCTOS CON IBU IGUAL A 30" />} />
          <Route path="/category/:categoryId" element={<ItemsListsContiner title="PRODUCTOS CON IBU IGUAL A 60" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
