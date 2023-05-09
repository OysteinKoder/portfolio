import { FC } from "react";
import { NavBarContainer } from "./navBar/navBarStyles";
import { Button } from "./Button";
import { CollapsedContext } from "../context/globalContext";
import { useContext } from "react";

interface NavBarContainerProps {
  collapsed: boolean;
}

const NavBar: FC<NavBarContainerProps> = ({ collapsed }) => {
  const { toggleCollapsed } = useContext(CollapsedContext);
  return (
    <NavBarContainer collapsed={collapsed}>
      <Button onClick={toggleCollapsed}>Om Meg</Button>
      <Button onClick={toggleCollapsed}>Prosjekter</Button>
      <Button onClick={toggleCollapsed}>Cv</Button>
      <Button onClick={toggleCollapsed}>Github</Button>
    </NavBarContainer>
  );
};

export default NavBar;
