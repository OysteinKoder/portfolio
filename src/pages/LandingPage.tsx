import NavBar from "../components/NavBar";
import {
  HamburgerContainer,
  Positioner,
} from "../components/navBar/navBarStyles";
import { MainContent, FlexWrapper } from "../components/uiHelpers/uiHelpers";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { CollapsedContext } from "../context/globalContext";
import ProfileCard from "../components/CardProfile";
import { cardContent } from "./cardContent/cardContent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectCarousel from "../components/CardProject";
import { MarginSpacer } from "../components/uiHelpers/uiHelpers";
import { useRef } from "react";
import { Contact as ContactForm } from "../components/ContactForm";

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
      <FlexWrapper direction="row">
        <NavBar
          isCollapsed={isCollapsed}
          projectsRef={carouselRef}
          profileRef={profileRef}
          contactRef={contactRef}
        />
        <Positioner collapsed={isCollapsed} />
        <MainContent collapsed={isCollapsed}>
          <HamburgerContainer>
            <AiOutlineMenu
              size="2em"
              onClick={toggleCollapsed}
              style={layerOnTop}
            />
          </HamburgerContainer>
          <ProfileCard props={cardContent[0]} reference={profileRef} />
          <MarginSpacer size="large" />
          <ProjectCarousel reference={carouselRef} />
          <MarginSpacer size="large" />
          <ContactForm reference={contactRef} />
        </MainContent>
      </FlexWrapper>
    </>
  );
}

export default LandingPage;
