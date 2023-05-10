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
          <Card
            variant="image"
            topLeftImage={profilBilde}
            topRightTitle="Hei, jeg heter Øystein og er en frontend utvikler"
            topRightText="Jeg er en frontend utvikler med stor interesse for å lære nye ferdigheter, og å ha det kjekt på arbeidsplassen"
            bottomLeftTitle="Ferdigheter"
            bottomLeftText="TypeScript, JavaScript, React, Git, Css, Html"
            bottomRightTitle="Utforsker"
            bottomRightList="Vue.js, C#, DotNet Core, Tailwind, Larvel"
          />
        </MainContent>
      </FlexWrapper>
    </>
  );
}

export default LandingPage;
