import React from "react"
import { ReactComponent as QuestionSvg } from "../img/question.svg"
import HtmlIcon from "../img/html.png"
import CssIcon from "../img/cssIcon.png"
import JsIcon from "../img/jsIcon.png"
import FigmaIcon from "../img/figmaIcon.png"
import ReactIcon from "../img/React-icon.png"
import { ReactComponent as Arrow } from "../img/Extendarrow.svg"
import AbletonIcon from "../img/ableton-icon-0.jpg"
import GimpIcon from "../img/gimpIcon.png"
import ArrowTurn from "./scripts/ArrowTurn"

function Skills() {
    return (
        <div>
            <div className="Skill-component">
                <div className="Component-spacing">
                </div>
                <h2 className="H2-headline">Ferdigheter</h2>
                <div className="Grid Skills-animation">
                    <h3 className="Beginner" onClick={noviceShow}>Amatør <QuestionSvg className="Svg"></QuestionSvg></h3>
                    <h3 className="Novice" onClick={juniorShow}> Dreven <QuestionSvg className="Svg"></QuestionSvg></h3>
                    <h3 className="Junior" onClick={proShow} >junior <QuestionSvg className="Svg"></QuestionSvg></h3>
                    <h3 className="Senior" onClick={expertShow}>Senior <QuestionSvg className="Svg"></QuestionSvg></h3>
                    <img className="Html-icon" src={HtmlIcon} alt="html icon"></img>
                    <img className="Css-icon" src={CssIcon} alt="html icon"></img>
                    <img className="Js-icon" src={JsIcon} alt="html icon"></img>
                    <img className="Figma-icon" src={ReactIcon} alt="html icon"></img>
                    <div className="Html-bar"></div>
                    <div className="Css-bar"></div>
                    <div className="Js-bar"></div>
                    <div className="React-bar"></div>
                </div>

                <div className="Grid-extend Skills-animation-two" id="Grid-extend">
                    <img className="Figma-icon" src={FigmaIcon} alt="Figma icon"></img>
                    <img className="Live-icon" src={AbletonIcon} alt="Ableton live icon"></img>
                    <img className="Gimp-icon" src={GimpIcon} alt="gimp icon"></img>
                    <div className="Figma-bar"></div>
                    <div className="Live-bar"></div>
                    <div className="Gimp-bar"></div>
                </div>

                <div className="Explain Beginner-explain" id="beginner">Kjenner såvidt til teknologien og er helt i begynnerfasen</div>
                <div className="Explain Novice-explain" id="novice"> Kjenner godt til teknologien og hva man kan gjøre med den. Kan arbeide selvstendig med google som hjelp, men trenger noe veiledning</div>
                <div className="Explain Junior-explain" id="pro"> Kan ganske mye og trenger mindre veiledning</div>
                <div className="Explain Senior-explain" id="expert"> Personen som gir veiledning</div>
            </div>

            <div className="Arrow-box" onClick={SkillsExstend}>
                <p> <em> Utvid </em></p>
                <Arrow className="Arrow" id="Arrow"> </Arrow>
            </div>
        </div>
    )
}

let noviceSwitch = false
let juniorSwitch = false
let proSwitch = false
let expertSwitch = false
let extendSwitch = false

function noviceShow() {
    const expert = document.getElementById("expert")
    const pro = document.getElementById("pro")
    const junior = document.getElementById("novice")
    const novice = document.getElementById("beginner")
    if (noviceSwitch === false) {
        novice.classList.add("Explain-show")
        pro.classList.remove("Explain-show")
        junior.classList.remove("Explain-show")
        expert.classList.remove("Explain-show")
    }
    else {
        novice.classList.remove("Explain-show")
    }
    noviceSwitch = !noviceSwitch
}

function juniorShow() {
    const expert = document.getElementById("expert")
    const pro = document.getElementById("pro")
    const junior = document.getElementById("novice")
    const novice = document.getElementById("beginner")
    if (juniorSwitch === false) {
        junior.classList.add("Explain-show")
        novice.classList.remove("Explain-show")
        pro.classList.remove("Explain-show")
        expert.classList.remove("Explain-show")
    }
    else {
        junior.classList.remove("Explain-show")
    }
    juniorSwitch = !juniorSwitch
}
function proShow() {
    const expert = document.getElementById("expert")
    const pro = document.getElementById("pro")
    const junior = document.getElementById("novice")
    const novice = document.getElementById("beginner")
    if (proSwitch === false) {
        pro.classList.add("Explain-show")
        novice.classList.remove("Explain-show")
        junior.classList.remove("Explain-show")
        expert.classList.remove("Explain-show")
    }
    else {
        pro.classList.remove("Explain-show")
    }
    proSwitch = !proSwitch
}

function expertShow() {
    const expert = document.getElementById("expert")
    const pro = document.getElementById("pro")
    const junior = document.getElementById("novice")
    const novice = document.getElementById("beginner")
    if (expertSwitch === false) {
        expert.classList.add("Explain-show")
        novice.classList.remove("Explain-show")
        pro.classList.remove("Explain-show")
        junior.classList.remove("Explain-show")
    }
    else {
        expert.classList.remove("Explain-show")
    }
    expertSwitch = !expertSwitch
}

function SkillsExstend() {
    const extend = document.getElementById("Grid-extend")
    if (extendSwitch === false) {
        extend.classList.add("Skills-extend")
    }
    else {
        extend.classList.remove("Skills-extend")
    }
    extendSwitch = !extendSwitch
    ArrowTurn()
}


export default Skills