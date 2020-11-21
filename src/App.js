import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home'
import PokeDetails from './Pages/pokeDetails'

function App() {
  return (
    <>
     <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details">
          <PokeDetails />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
