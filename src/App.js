import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemsListsContiner from './components/ItemListCotainer/ItemsListsContiner';
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header title='DRINK COFFEE' />
        <ItemsListsContiner title="Lista de Productos" />
      </div>
    )
  }
}

export default App;
