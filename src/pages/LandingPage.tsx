import NavBar from "../components/NavBar";
import {
  HamburgerContainer,
  Positioner,
} from "../components/navBar/navBarStyles";
import {
  MainContent,
  FlexWrapper,
  LineSeparator,
} from "../components/uiHelpers/uiHelpers";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { CollapsedContext } from "../context/globalContext";
import Card from "../components/Card";
import arrowDown from "../assets/arrowDown.svg";
import { ArrowSvg } from "../components/svgArrow";
import { cardContent } from "./cardContent/cardContent";

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
              <Card props={card} key={idx} />
              <LineSeparator />
            </>
          ))}
        </MainContent>
      </FlexWrapper>
    </>
  );
}

export default LandingPage;
