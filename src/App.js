import './App.css';
import TablazatReceptek from './components/TablazatReceptek';
import Kategoria from './components/Kategoria';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Receptek</h1>
      </header>
      <main>
      <Kategoria/>
      <TablazatReceptek/>
      </main>
    </div>
 );
}

export default App;
