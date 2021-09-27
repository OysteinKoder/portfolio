import React from "react";
import Carousel from "react-elastic-carousel"
import ChildBooksOnline from "./childBooksOnline"
import OgProject from "./OygardenGrappling"
import "../App.css"

function projectCarousel() {
    return (
        <div className="Prosjekter">
            <h2 className="H2-headline">Prosjekter</h2>
            <Carousel>
                <ChildBooksOnline></ChildBooksOnline>
                <OgProject></OgProject>
            </Carousel>
        </div>
    )
}

export default projectCarousel