import React from "react"
import {ReactComponent as QuestionSvg} from "../img/question.svg"

function Skills() {
    return (
        <div className="Component-spacing Skills-animation">
            <h2>Skills</h2>
            <div className="box">
                <div className="Grid">
                    <h3 className="Novice">Novice <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Junior">Junior <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Professional">Professional <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Expert">Expert <QuestionSvg class="Svg"></QuestionSvg></h3>
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