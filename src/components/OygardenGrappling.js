import React from "react"
import OgImg from "../img/Ogimg.png"

export default function OygardenGrappling() {
    return(
           <div className="Project-component">
            <div className="Component-spacing">
            </div>
            <div className="Flex-project">
                {/*  eslint-disable-next-line */}
                <span className="Project-h2-2"> Øygarden Grappling </span>
                <img className="Project-img" src={OgImg} alt="Øygarden Grappling logo"></img>
                <div className="Project-link"> <a href="https://oysteinkoder.github.io/OygardenGrappling/" className="White-text">Click</a></div>
                {/*  eslint-disable-next-line */}
            </div> 
        </div>
    )
}