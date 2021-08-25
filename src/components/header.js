import React from "react"
import ProfilePic from "../img/profilePicSmall.jpg"

function Header() {
    return(
        <div className="Header-box">
<div className="Header-text-box">
    <h1 className="Header-text1">
Hi, my <br></br> name is <b>Øystein</b>
    </h1>
    <h3 className="Header-text2">
I'm a <b>junior front end developer</b> <br></br> from Bergen, Norway.
    </h3>
</div>


<img src={ProfilePic} className="Profile-pic Pic-animation"></img>

        </div>
    )
}
export default Header