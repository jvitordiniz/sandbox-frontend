import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Formulario from "./formulario";
import Listagem from "./listagem";


/* https://reactrouter.com/web/example/basic*/
export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/formulario">Nova Task</Link>
          </li>
          <li>
            <Link to="/dashboard">Listagem</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/formulario">
            <Formulario />
          </Route>
          <Route path="/dashboard">
            <Listagem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
