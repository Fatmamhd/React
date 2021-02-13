
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Ex2 from './pages/ex2';
import Ex3 from './pages/ex3';
import Ex4 from './pages/ex4';


function App() {
  return (
    <Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/ex2">Exercice 2</Link>
      </li>
      <li>
        <Link to="/ex3">Exercice 3</Link>
      </li>
      <li>
        <Link to="/ex4">Exercice 4 </Link>
      </li>
    </ul>
  </nav>
</div>
<Switch>
  <Route path="/ex2">
    <Ex2/>
  </Route>
  <Route path="/ex3">
    <Ex3/>
  </Route>
  <Route path="/ex4">
    <Ex4/>
  </Route>
</Switch>
    </Router>
  );
}

export default App;
