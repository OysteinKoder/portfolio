import React from "react"
import BurgerJointImg from "../img/burgerJointImg.jpg"



function BurgerJointProject(props) {
    return (
        <div className="Project-component">
            <div className="Component-spacing">
            </div>
            <div className="Flex-project">
                {/*  eslint-disable-next-line */}
                <span className="Project-h2-2"> Burger Joint </span>
                <img className="Project-img" src={BurgerJointImg} alt="Tasty looking burger menu"></img>
                <div className="Project-link"> <a href="https://oysteinkoder.github.io/restaurant/" className="White-text">Click</a></div>
                {/*  eslint-disable-next-line */}
            </div>


        </div>
    )
}
export default BurgerJointProject