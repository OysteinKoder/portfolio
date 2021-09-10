import React from "react"
import BookImg from "../img/ChildBooksOnline.jpg"



function Projects(props) {
    return (
        <div className="Project-component">
            <div className="Component-spacing">
            </div>
            <div className="Flex-project">
                {/*  eslint-disable-next-line */}
                <span className="Project-h2-2"> Child Books Online </span>
                <img className="Project-img" src={BookImg} alt="Child Books Online project"></img>
                <div className="Project-link"> <a href="https://oysteinkoder.github.io/child_books_online/Foods" className="White-text">Click</a></div>
                {/*  eslint-disable-next-line */}
            </div>


        </div>
    )
}
export default Projects