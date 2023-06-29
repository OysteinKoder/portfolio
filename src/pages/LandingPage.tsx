import "react-responsive-carousel/lib/styles/carousel.min.css";

import Nav from "../components/NavBar";

import Projects from "../components/Projects";

import Profile from "../components/Profile";

import { Hamburger, NavFrame } from "../components/navBar/navBarStyles";

import { Main, Wrapper } from "../components/uiHelpers/uiHelpers";

import { AiOutlineMenu } from "react-icons/ai";

import { useContext } from "react";

import { CollapsedContext } from "../context/globalContext";

import { cardContent } from "./cardContent/cardContent";

import { useRef } from "react";

import { Contact } from "../components/Contact";

const layerOnTop: React.CSSProperties = {
  zIndex: 3,
  position: "fixed",
};

function LandingPage() {
  const { isCollapsed, toggleCollapsed } = useContext(CollapsedContext);

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
          <Hamburger>
            <AiOutlineMenu
              size="2em"
              onClick={toggleCollapsed}
              style={layerOnTop}
            />
          </Hamburger>
          <Profile props={cardContent} reference={profileRef} />
          <Projects reference={carouselRef} />
          <Contact reference={contactRef} />
        </Main>
      </Wrapper>
    </>
  );
}

export default LandingPage;
