import React from "react"
import ProfilePic from "../img/profilePicSmall.jpg"

function Header() {
    return (
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

                    <div className="Center">
                        <img src={ProfilePic} alt="profile ca 30 year old handsome man" className="Profile-pic Pic-animation"></img>
                        <div className="About-btn" onClick={aboutShow}>Om meg</div>
                    </div>
                </div>
                <p className="About-text" id="about" >
                    <span className="About-text-one">
                        Jeg er en kar i slutten av 20 årene som er glad i alt som har med it og hardware å gjøre.
                        <br /> <br />
                        På fritiden liker jeg å være med min forlovede, spille diverse instrumenter, produsere musikk og å være med familie, venner og kollegaer. Det går også litt tid til dataspill mens jeg prater med venner på discord. Jeg er også styreleder og hovedtrener for kampsport gruppen Øygarden Grappling.

                    </span>
                    <br /> <br />
                    <span className="About-text-two">
                        Hovedsakelig har jeg arbeidet innen service og helse men har lengtet etter en større utfordring. Den utfordringen fant jeg i front-end utvikling og det er alltid nye problemer å løse når man koder. Til nå har jeg kodet i ca 3 mnd på egenhånd og resten via Kodehode. Regn med å få en engasjert ansatt med mange spørsmål om dere velger meg.
                    </span>
                    <br /> <br />
                    Det jeg liker best med front-end utvikling er at man stadig lærer noe nytt og at man arbeider med kreative løsninger. Det kjekkeste for meg er å arbeide med design og ux men det jeg gleder meg mest til er å lære mer javascript og “halveis-backend” løsninger.

                    Ofte så våkner jeg tidlig på morningen for å arbeide før jeg går på kurs. Hvorfor spør du kanskje? Det rett og slett fordi det er så kjekt. Det går også en del tid til dugnad for å lage nettløsninger for venner/bekjente. Jeg har også opprettet et enkeltpersonforetak “Ellingsen Utvikling” som jeg håper å kunne tjene en slant med i framtiden.
                    <br /> <br />
                    Utenom koding så har sjåfør-arbeid vært det kjekkeste jeg har gjort. Grunnen til det er at jeg liker å slå av en prat og å yte topp service. Dette førte til at jeg leste noen bøker om psykologi for å hjelpe pasientene på en bedre måte.
                    <br /> <br />
                    Hvis du er på utkikk etter en sulten og lærevillig front-end utvikler så ikke nøl med å ta kontakt.

                    <br /> <br />
                    <span>
                        Hvis du er på utkikk etter en sulten og lærevillig front-end utvikler så ikke nøl med å ta kontakt!
                    </span>
                    <br /> <br />
                    <span>
                        Mail: Oystein.kodehode @gmail.com
                        <br />
                        Tlf: 416 54 916
                    </span>
                </p>
            </div>
        </div>
    )
}
let aboutSwitch = false;
function aboutShow() {
    const about = document.getElementById("about")
    if (aboutSwitch === false) {
        about.classList.add("About-show")
    }
    else {
        about.classList.remove("About-show")
    }
    aboutSwitch = !aboutSwitch
}
export default Header