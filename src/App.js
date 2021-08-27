// eslint-disable-next-line
import logo from './logo.svg'; 
import './App.css';
// eslint-disable-next-line
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Header from "./components/header"
import Skills from "./components/skills"
import Projects from "./components/projects"

function App() {
  return (
    <Router>
      <Header></Header>
      <Skills></Skills>
      <Projects
        description="Child Books Online is a fun and interactive picture book for children"

        title="Child Books Online"
        imgClass="Child-books-online-img"
        link="https://oysteinkoder.github.io/child_books_online/Animals">

      </Projects>
    </Router>
  );
}

export default App;
