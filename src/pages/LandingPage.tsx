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
const layerOnTop: React.CSSProperties = {
  zIndex: 3,
  position: "fixed",
};

function LandingPage() {
  const { isCollapsed, toggleCollapsed } = useContext(CollapsedContext);
  const profileRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <FlexWrapper direction="row">
        <NavBar
          collapsed={isCollapsed}
          projectsRef={carouselRef}
          profileRef={profileRef}
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
          {cardContent.map((card, idx) => (
            <>
              <ProfileCard props={card} key={idx} reference={profileRef} />
            </>
          ))}
          <MarginSpacer size="medium" />
          <ProjectCarousel reference={carouselRef} />
        </MainContent>
      </FlexWrapper>
    </>
  );
}

export default LandingPage;
