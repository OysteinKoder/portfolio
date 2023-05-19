import { FC } from "react";
import { NavBarContainer } from "./navBar/navBarStyles";
import { Button } from "./Button";
import { CollapsedContext } from "../context/globalContext";
import { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";

interface NavBarContainerProps {
  collapsed: boolean;
}

const NavBar: FC<NavBarContainerProps> = ({ collapsed }) => {
  const { toggleCollapsed } = useContext(CollapsedContext);
  return (
    <NavBarContainer collapsed={collapsed}>
      <Button onClick={toggleCollapsed}>
        Om Meg <AiFillHome />
      </Button>
      <Button onClick={toggleCollapsed}>
        Prosjekter <AiFillFolder />
      </Button>
      <Button onClick={toggleCollapsed}>Github ⚙️</Button>
      <Button onClick={toggleCollapsed}>Kontakt ⚙️</Button>
    </NavBarContainer>
  );
};

export default NavBar;
