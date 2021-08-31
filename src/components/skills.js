import React from "react"
import {ReactComponent as QuestionSvg} from "../img/question.svg"
import HtmlIcon from "../img/html.png"
import CssIcon from "../img/cssIcon.png"
import JsIcon from "../img/jsIcon.png"
import FigmaIcon from "../img/figmaIcon.png"

function Skills() {
    return ( 
    <div className="Skill-component">
        <div className="Component-spacing">
        </div>
            <h2 className="H2-headline">Skills</h2>
                <div className="Grid Skills-animation">
                    <h3 className="Novice">Novice <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Junior">Junior <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Professional">Pro <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Expert">Expert <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <img className="Html-icon" src={HtmlIcon}></img>
                    <img className="Css-icon" src={CssIcon}></img>
                    <img className="Js-icon" src={JsIcon}></img>
                    <img className="Figma-icon" src={FigmaIcon}></img>
                    <div className="Html-bar"></div>
                    <div className="Css-bar"></div>
                    <div className="Js-bar"></div>
                    <div className="Figma-bar"></div>
                
        </div>
            
            </div>
    )
}

export default Skills