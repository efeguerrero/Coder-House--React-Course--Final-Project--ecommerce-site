import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const greeting = '¡Hola! Somos Stefanos Deco & Lifestyle';

function App() {
  return (
    <section className="mainContainer">
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </section>
  );
}

export default App;
