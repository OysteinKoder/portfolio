import "react-responsive-carousel/lib/styles/carousel.min.css";

import Nav from "../components/NavBar";

import Projects from "../components/Projects";

import Profile from "../components/Profile";

import Hamburger from "../components/navBar/Hamburger";

import { NavFrame } from "../components/navBar/navBarStyles";

import { Main, Wrapper } from "../components/uiHelpers/uiHelpers";

import { useContext } from "react";

import { CollapsedContext } from "../context/globalContext";

import { cardContent } from "./cardContent/cardContent";

import { useRef } from "react";

import { Contact } from "../components/Contact";

function LandingPage() {
  const { isCollapsed } = useContext(CollapsedContext);

  const profileRef = useRef<HTMLDivElement>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Wrapper direction="row">
        <NavFrame collapsed={isCollapsed} />
        <Nav
          isCollapsed={isCollapsed}
          projectsRef={carouselRef}
          profileRef={profileRef}
          contactRef={contactRef}
        />
        <Main collapsed={isCollapsed}>
          <Hamburger />
          <Profile props={cardContent} reference={profileRef} />
          <Projects reference={carouselRef} />
          <Contact reference={contactRef} />
        </Main>
      </Wrapper>
    </>
  );
}

export default LandingPage;
