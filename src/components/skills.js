import React from "react"
import { ReactComponent as QuestionSvg } from "../img/question.svg"
import HtmlIcon from "../img/html.png"
import CssIcon from "../img/cssIcon.png"
import JsIcon from "../img/jsIcon.png"
import FigmaIcon from "../img/figmaIcon.png"
import ReactIcon from "../img/React-icon.png"
import { ReactComponent as Arrow } from "../img/Extendarrow.svg"
import AbletonIcon from "../img/ableton-icon-0.jpg"


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
                <div className="Figma-bar"></div>
            </div>
            <div className="Explain Beginner-explain" id="beginner">Kjenner såvidt til teknologien og er helt i begynnerfasen</div>
            <div className="Explain Novice-explain" id="novice"> Kjenner godt til teknologien og hva man kan gjøre med den. Kan arbeide selvstendig med google som hjelp, men trenger noe veiledning</div>
            <div className="Explain Junior-explain" id="pro"> Kan ganske mye og trenger mindre veiledning</div>
            <div className="Explain Senior-explain" id="expert"> Personen som gir veiledning</div>
        </div>

        <div className="Arrow-box">
        <h4> <em> Utvid </em></h4>
            <Arrow className="Arrow"> </Arrow>
            </div>
            
        </div>
    )
}


let noviceSwitch = false
let juniorSwitch = false
let proSwitch = false
let expertSwitch = false

function noviceShow() {
    const novice = document.getElementById("beginner")
    if (noviceSwitch === false) {
        novice.classList.add("Explain-show")
    }
    else {
        novice.classList.remove("Explain-show")
    }
    noviceSwitch = !noviceSwitch
}

function juniorShow() {
    const junior = document.getElementById("novice")
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