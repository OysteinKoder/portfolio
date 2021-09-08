import React from "react"
import ProfilePic from "../img/profilePicSmall.jpg"

function Header() {
    return(
        <div>
        <div className="Header-box">
            <div className="Header-flex-box">
<div className="Header-text-box">
    <h1 className="Header-text1">
Hei, jeg <br></br> heter <span className="Strong-text">Øystein</span>
    </h1>
    <h3 className="Header-text2">
og er en <b><span className="Strong-text"> frontend utvikler </span></b> <br></br> fra <span className="Strong-text">Bergen </span>
    </h3>
</div>

<div>
<img src={ProfilePic} alt="profile ca 30 year old handsome man" className="Profile-pic Pic-animation"></img>
<div className="About-btn" onClick={aboutShow}>Om meg</div>
</div>
</div>
        <p className="About-text" id="about" > Hei! Jeg heter Øystein og er en junior front-end utvikler fra Bergen.
Det jeg liker best med front-end utvikling er at man stadig lærer noe nytt og at man får arbeide med kreative løsninger.
<br/> <br/>
Jeg begynte å lære meg å kode fordi jeg trengte en utfordring  og det er alltid noe nytt å lære når man koder! Etter noen måneder med selvstudie var jeg så heldig å komme inn på et kurs som heter kodehode. Dette kurset varer i ett år og inneholder 6 mnd teori med påfølgende 6 mnd utplassering i bedrift. Kodehode er en av de beste plassene å lære frontend utvikling i norge da andre studier/utdanninger ofte bare har front-end som en del av studieløpet og inneholder heller ikke praksis i bedrift. Kodehode er derimot laser fokusert på front-end og ferdige deltagere har arbeidserfaring fra ekte bedrifter! 
<br/> <br/>
På fritiden liker jeg å være med min forlovede, spille diverse instrumenter, produsere musikk og være med familie og venner/kollegaer. Det går også litt tid til dataspill mens jeg prater med venner på discord. Jeg er svært glad i folk og liker å slå av en prat. Utenom koding så har sjåfør-arbeid vært det kjekkeste jeg har gjort. Grunnen til det var at man fikk treffe så mange spennende mennesker!
<br/> <br/>
Hvis du er på utkikk etter en sulten og lærevillig front-end utvikler så ikke nøl med å ta kontakt! 
<br/> <br/>
Mail: Oystein.kodehode@gmail.com
<br/> 
Tlf:    815 49 300
 </p>
        </div>
        </div>
    )
}
let aboutSwitch = false;
function aboutShow() {
    const about = document.getElementById("about")
    if (aboutSwitch === false) {
        about.classList.add("Explain-show")
    }
    else {
        about.classList.remove("Explain-show")
    }
    aboutSwitch = !aboutSwitch
}
export default Header