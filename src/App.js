import './App.css';
import Header from './components/Header/Header';
import Pesquisa from './components/Pesquisa/Pesquisa';
import LivrosLancamentos from './components/LivrosRecomenda/LivrosRecomenda';

function App() {
  return (
    <div className="App">
        <Header/>
        <Pesquisa/>
        <LivrosLancamentos/>
    </div>
  );
}

export default App;
