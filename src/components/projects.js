import React from "react"

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
                    <a href={props.link} className="Project-link">Click</a>
                </div>
            </div>
        </div>
    )
}
export default Projects