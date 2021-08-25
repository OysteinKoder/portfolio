import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header"
import Skills from "./components/skills"
import Projects from "./components/projects"

function App() {
  return (
    <Router>
<Header></Header>
      <Skills></Skills>
      <Projects></Projects>
    </Router>
  );
}

export default App;
