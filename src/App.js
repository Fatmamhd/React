import './App.css';
import Table from './components/table';
import Magasin from './components/magasin';
import Header from './components/Header';
import Banniere from './components/Banniere';
import Contenu from './components/Contenu';
import Article from './components/Article';
import Titre from './components/Titre';
import Texte from './components/Texte';
import Note from './components/Note';
import Footer from './components/Footer';
import Menu from './components/Menu';
import '../style/style.css';
import Table2 from './components/table2';


function App() {
  return (
    <div className="App">
      <h2>Ex2</h2>
      <Table ligne="c est une ligne" colonne="c est une colonne" />
      <h2>Ex3</h2>
      <Table2/>
    </div>
  );
}

export default App;
