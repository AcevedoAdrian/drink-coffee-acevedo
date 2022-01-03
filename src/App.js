import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Componentes propios
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemsListsContiner from "./components/ItemListCotainer/ItemsListsContiner";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error/Error";

import { CartProvider } from "./context/CartContext";
const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home title="DRINK COFFEE" />} />
            <Route
              path="/products"
              element={<ItemsListsContiner title="PRODUCTOS" styleRender="all" />}
            />
            <Route
              path="/category/:category"
              element={<ItemsListsContiner title="CAFEE ESTILO" styleRender="category" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
