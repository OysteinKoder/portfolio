import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header"
import Skills from "./components/skills"
import ProjectCarousel from './components/projectCarousel';

function App() {
  return (
    <Router>
      <Header></Header>
      <Skills></Skills>
      <ProjectCarousel></ProjectCarousel>
    </Router>
  );
}

export default App;
