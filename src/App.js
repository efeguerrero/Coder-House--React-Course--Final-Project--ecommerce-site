import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <section className="mainContainer">
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </section>
  );
}

export default App;
