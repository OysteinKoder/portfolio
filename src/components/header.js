import React from "react"
import ProfilePic from "../img/profilePicSmall.jpg"

function Header() {
    return(
        <div className="Header-box">
<div className="Header-text-box">
    <h1>
Hi, my <br></br> name is <b>Øystein</b>
    </h1>
    <h3>
I'm a <b>junior front end developer</b> <br></br> from Bergen, Norway.
    </h3>
</div>

<div className="Header-img-box">
<img src={ProfilePic} className="Profile-pic"></img>
</div>
        </div>
    )
}
export default Header