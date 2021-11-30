import React from 'react';
// Componentes propios
import Home from './components/Home/Home';
import ItemsListsContiner from './components/ItemListCotainer/ItemsListsContiner';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// Estilos CSS
import './App.css';


const App = () => {
  const id = Math.floor((Math.random() * (20 - 1 + 1)) + 1);
  return (
    <>
      <NavBar />
      <Home title='DRINK COFFEE' />
      <ItemsListsContiner title="PRODUCTOS" />
      <ItemDetailContainer id={id} />
    </>
  )
}

export default App;
