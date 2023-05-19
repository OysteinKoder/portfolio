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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectCarousel from "../components/CardProject";
import { SubTitle } from "../components/cardProfile/cardStyles";
import { MarginSpacer } from "../components/uiHelpers/uiHelpers";
const layerOnTop: React.CSSProperties = {
  zIndex: 3,
  position: "fixed",
};

function LandingPage() {
  const { isCollapsed, toggleCollapsed } = useContext(CollapsedContext);
  return (
    <>
      <FlexWrapper direction="row">
        <NavBar collapsed={isCollapsed} />
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
              <ProfileCard props={card} key={idx} />
            </>
          ))}
          <MarginSpacer size="medium" />
          <ProjectCarousel />
        </MainContent>
      </FlexWrapper>
    </>
  );
}

export default LandingPage;
