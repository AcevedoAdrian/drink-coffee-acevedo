import React from 'react';
// Componentes propios
import Home from './components/Home/Home';
import ItemsListsContiner from './components/ItemListCotainer/ItemsListsContiner';
import NavBar from './components/NavBar/NavBar';

// Estilos CSS
import './App.css';

const App = () => {
  return (
    <>
      <NavBar />
      <Home title='DRINK COFFEE' />
      <ItemsListsContiner title="PRODUCTOS" />
    </>
  )
}

export default App;
