import NavBar from "../components/NavBar";
import { HamburgerContainer } from "../components/navBar/navBarStyles";
import { MainContent, FlexWrapper } from "../components/uiHelpers/uiHelpers";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { CollapsedContext } from "../context/globalContext";

function LandingPage() {
  const { isCollapsed, toggleCollapsed } = useContext(CollapsedContext);
  return (
    <>
      <HamburgerContainer>
        <AiOutlineMenu size="2.5em" onClick={toggleCollapsed} />
      </HamburgerContainer>
      <FlexWrapper direction="row">
        <NavBar collapsed={isCollapsed} />
        <MainContent collapsed={isCollapsed}>
          <h1>Hey</h1>
        </MainContent>
      </FlexWrapper>
    </>
  );
}

export default LandingPage;
