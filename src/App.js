
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Ex2 from './pages/ex2';
import Ex3 from './pages/ex3';
import Ex4 from './pages/ex4';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';


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
      <li>
        <Link to="/page1">page 1</Link>
      </li>
      <li>
        <Link to="/page2">page 2</Link>
      </li>
      <li>
        <Link to="/page3">page 3</Link>
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
  <Route path="/page1">
    <Page1/>
  </Route>
  <Route path="/page2">
    <Page2/>
  </Route>
  <Route path="/page3">
    <Page3/>
  </Route>
  </Switch>
    </Router>
  );
}

export default App;
