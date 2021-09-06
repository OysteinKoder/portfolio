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
                    <h3 className="Novice" onClick={noviceShow} onMouseOver={noviceShow} onMouseLeave={noviceShow}>Novice <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Junior" onClick={juniorShow} onMouseOver={juniorShow} onMouseLeave={juniorShow}>Junior <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Professional" onClick={proShow} onMouseOver={proShow} onMouseLeave={proShow}>Pro <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <h3 className="Expert" onClick={expertShow} onMouseOver={expertShow} onMouseLeave={expertShow}>Expert <QuestionSvg class="Svg"></QuestionSvg></h3>
                    <img className="Html-icon" src={HtmlIcon} alt="html icon"></img>
                    <img className="Css-icon" src={CssIcon} alt="html icon"></img>
                    <img className="Js-icon" src={JsIcon} alt="html icon"></img>
                    <img className="Figma-icon" src={FigmaIcon} alt="html icon"></img>
                    <div className="Html-bar"></div>
                    <div className="Css-bar"></div>
                    <div className="Js-bar"></div>
                    <div className="Figma-bar"></div>
        </div>
        <div className="Explain Novice-explain" id="novice"> Has some knowlage but needs constant guidence</div>
        <div className="Explain Junior-explain" id="junior"> Can work independantly but needs the occational guidence</div>
        <div className="Explain Pro-explain" id="pro"> Has loads of experiance and rearly needs any help</div>
        <div className="Explain Expert-explain" id="expert"> The guy who gives guidence</div>
            </div>
    )
}

let noviceSwitch = false
let juniorSwitch = false
let proSwitch = false
let expertSwitch = false
function noviceShow() {
    const novice = document.getElementById("novice")
    if (noviceSwitch === false) {
        novice.classList.add("Explain-show")
    }
    else {
        novice.classList.remove("Explain-show")
    }
    noviceSwitch = !noviceSwitch
    }

    function juniorShow() {
        const junior = document.getElementById("junior")
        if (juniorSwitch === false) {
            junior.classList.add("Explain-show")
        }
        else {
            junior.classList.remove("Explain-show")
        }
        juniorSwitch = !juniorSwitch
        }

        function proShow() {
            const pro = document.getElementById("pro")
            if (proSwitch === false) {
                pro.classList.add("Explain-show")
            }
            else {
                pro.classList.remove("Explain-show")
            }
            proSwitch = !proSwitch
            }

            function expertShow() {
                const expert = document.getElementById("expert")
                if (expertSwitch === false) {
                    expert.classList.add("Explain-show")
                }
                else {
                    expert.classList.remove("Explain-show")
                }
                expertSwitch = !expertSwitch
                }

export default Skills