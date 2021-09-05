import React from "react"



function Projects(props) {
    return (
        <div className="Project-component">
        <div className="Component-spacing">
        </div>
            <h2 className="H2-headline">Projects</h2>
                <div className="Grid-project">

                <svg viewBox="0 0 200 200" className="Swipe-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"/></svg>

                    <img className={props.imgClass} src={props.img}></img>
                    <span className="Project-h2-2"> {props.title} </span>
                    <div className="Project-link"> <a href={props.link} className="White-text">Click</a></div>

                    <svg viewBox="0 0 200 200" className="Swipe-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"/></svg>

                </div>
            
        
        </div>
    )
}
export default Projects