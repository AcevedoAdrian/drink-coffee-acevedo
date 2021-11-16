import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h2>Drink Coffee to write JSX code</h2>
        </header>
      </div>
    )
  }
}

export default App;
