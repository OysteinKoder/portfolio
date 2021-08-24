import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header"

function App() {
  return (
    <Router>
<Header></Header>
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
