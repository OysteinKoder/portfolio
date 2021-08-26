import React from "react"
import ChildBookImg from "../img/ChildBooksOnline.jpg"

function Projects(props) {
    return (
        <div className="Component-spacing Project-scroll">
            <h2>Projects</h2>
            <div className="White-box">
                <div className="Grid-project">
                    <div className={props.imgClass}></div>
                    <span className="Project-h2-2"> {props.title} </span>
                    <div className="Project-p"> 
                        {props.description}
                    </div>
                    <button className="Project-link"> <a href={props.link}>Click</a></button>
                </div>
            </div>
        </div>
    )
}

export default Projects