import { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import ItemsListsContiner from './components/ItemListCotainer/ItemsListsContiner';
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Home title='DRINK COFFEE' />
        <ItemsListsContiner title="Lista de Productos" />
      </div>
    )
  }
}

export default App;
