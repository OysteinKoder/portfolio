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
                        Hei! Det jeg liker best med front-end utvikling er at man stadig lærer noe nytt og at man arbeider med kreative løsninger. Det kjekkeste for meg er å arbeide med design og ux!
                    </span>
                    <br /> <br />
                    <span className="About-text-two">
                        Jeg begynte å lære meg å kode fordi jeg trengte en utfordring, og det er alltid nye problemer å løse når man koder! Regn med å få en engasjert ansatt med mange spørsmål dersom dere ansetter meg. Etter noen måneder med selvstudie var jeg så heldig å komme inn på et kurs som heter kodehode. Kurset varer i ett år og inneholder 6 mnd teori med 6 mnd utplassering i bedrift. Kodehode er en av de beste plassene å lære frontend utvikling da kurset er laser-fokusert på front-end og ferdige deltagere har arbeidserfaring fra  <em>ekte </em> bedrifter!
                    </span>
                    <br /> <br />
                    På fritiden liker jeg å være med min forlovede, spille diverse instrumenter, produsere musikk og å være med familie, venner og kollegaer. Det går også litt tid til dataspill mens jeg prater med venner på discord. Utenom koding så har sjåfør-arbeid vært det kjekkeste jeg har gjort. Grunnen til det er at jeg liker å slå av en prat og å yte topp service! Dette førte til at jeg leste noen bøker om psykologi for å bedre kunne hanskes med ømfintlige samtaler.
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