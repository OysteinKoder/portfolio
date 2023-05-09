import NavBar from "../components/NavBar";
import { HamburgerContainer } from "../components/navBar/navBarStyles";
import { MainContent, FlexWrapper } from "../components/uiHelpers/uiHelpers";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { CollapsedContext } from "../context/globalContext";
import Card from "../components/Card";
import profilBilde from "../assets/Profilbilde_Øystein.jpg";

function LandingPage() {
  const { isCollapsed, toggleCollapsed } = useContext(CollapsedContext);
  return (
    <>
      <FlexWrapper direction="row">
        <NavBar collapsed={isCollapsed} />

        <MainContent collapsed={isCollapsed}>
          <HamburgerContainer>
            <AiOutlineMenu size="2em" onClick={toggleCollapsed} />
          </HamburgerContainer>
          <Card title="En Tittel" text="dette er text" image={profilBilde} />
        </MainContent>
      </FlexWrapper>
    </>
  );
}

export default LandingPage;
