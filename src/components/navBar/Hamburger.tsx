import { useContext } from "react";
import { CollapsedContext } from "../../context/globalContext";
import { HamburgerWrapper } from "./navBarStyles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Opens and closes the nav bar

const Hamburger = () => {
  const layerOnTop: React.CSSProperties = {
    zIndex: 3,
    position: "fixed",
  };
  const { isCollapsed, toggleCollapsed } = useContext(CollapsedContext);
  return (
    <HamburgerWrapper>
      {isCollapsed ? (
        <AiOutlineMenu
          size="2em"
          onClick={toggleCollapsed}
          style={layerOnTop}
        />
      ) : (
        <AiOutlineClose
          size="2em"
          onClick={toggleCollapsed}
          style={layerOnTop}
        />
      )}
    </HamburgerWrapper>
  );
};

export default Hamburger;
