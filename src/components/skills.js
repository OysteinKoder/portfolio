import React from "react"
import {ReactComponent as QuestionSvg} from "../img/question.svg"

function Skills() {
    return (
        <div className="Component-spacing Skills-animation">
            <h2>Skills</h2>
            <div className="box">
                <div className="Grid">
                    <div className="Novice"> <h3>Novice <QuestionSvg class="Svg"></QuestionSvg></h3></div>
                    <div className="Junior">  <h3>Junior <QuestionSvg class="Svg"></QuestionSvg></h3></div>
                    <div className="Professional">  <h3>Professional <QuestionSvg class="Svg"></QuestionSvg></h3></div>
                    <div className="Expert">  <h3>Expert <QuestionSvg class="Svg"></QuestionSvg></h3></div>
                    <div className="Html-icon"></div>
                    <div className="Css-icon"></div>
                    <div className="Js-icon"></div>
                    <div className="Figma-icon"></div>
                    <div className="Html-bar"></div>
                    <div className="Css-bar"></div>
                    <div className="Js-bar"></div>
                    <div className="Figma-bar"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills