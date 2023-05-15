import NavBar from "../components/NavBar";
import {
  HamburgerContainer,
  Positioner,
} from "../components/navBar/navBarStyles";
import { MainContent, FlexWrapper } from "../components/uiHelpers/uiHelpers";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { CollapsedContext } from "../context/globalContext";
import Card from "../components/Card";
import profileImage from "../assets/Profilbilde_Øystein.jpg";
import arrowDown from "../assets/arrowDown.svg";
import { ArrowSvg } from "../components/svgArrow";

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
          <Card
            variant="image"
            topLeftImage={profileImage}
            topRightTitle="Hei, jeg heter Øystein."
            topRightText="De tre tingene jeg virkelig liker å jobbe med er Typescript, React og design. Koding er ikke bare min jobb, men også min lidenskap. I tillegg spiller jeg bass og produserer musikk, og jeg kan også ta noen fine bilder"
            bottomLeftTitle="Ferdigheter"
            bottomLeftText="TypeScript, JavaScript, React, Git, Css, Html"
            bottomRightTitle="Utforsker"
            bottomRightList="Vue.js, C#, DotNet Core, Tailwind, Larvel"
          />
          <FlexWrapper direction="row" justifyContent="center">
            <ArrowSvg src={arrowDown} />
          </FlexWrapper>
        </MainContent>
      </FlexWrapper>
    </>
  );
}

export default LandingPage;
