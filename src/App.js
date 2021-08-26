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
      <Projects
        description="Child Books Online is a fun and interactive app that i am developing for mobile and pads.
                        When ready it will be released on google play and apple store. 
                        The goal is to provide parents with an interactive and fun way to teach their kids new words and basic smart-device use. And all of this for a much cheaper price then buying picture books. This is a work in progress."

        title="Child Books Online"
        imgClass="Child-books-online-img"
        link="https://oysteinkoder.github.io/child_books_online/Animals">

      </Projects>
    </Router>
  );
}

export default App;
