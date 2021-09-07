import React from "react"
import ProfilePic from "../img/profilePicSmall.jpg"

function Header() {
    return(
        <div className="Header-box">
<div className="Header-text-box">
    <h1 className="Header-text1">
Hi, my <br></br> name is <span className="Strong-text">Øystein</span>
    </h1>
    <h3 className="Header-text2">
I'm a <b><span className="Strong-text"> frontend developer </span></b> <br></br> from <span className="Strong-text">Bergen </span>, Norway.
    </h3>
</div>


<img src={ProfilePic} alt="profile ca 30 year old handsome man" className="Profile-pic Pic-animation"></img>
        </div>
    )
}
export default Header