import { FC } from "react";
import { NavBarContainer } from "./navBar/navBarStyles";
import { Button } from "./Button";
import { CollapsedContext } from "../context/globalContext";
import { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";

interface NavBarContainerProps {
  collapsed: boolean;
  profileRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const NavBar: FC<NavBarContainerProps> = ({
  collapsed,
  projectsRef: projectsRef,
  profileRef: profileRef,
}) => {
  const { toggleCollapsed } = useContext(CollapsedContext);
  const toProfile = () => {
    toggleCollapsed;
    console.log("clicked");
    profileRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const toProjects = () => {
    toggleCollapsed;
    console.log("clicked");
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <NavBarContainer collapsed={collapsed}>
      <Button onClick={toProfile}>
        Om Meg <AiFillHome />
      </Button>
      <Button onClick={toProjects}>
        Prosjekter <AiFillFolder />
      </Button>
      <Button onClick={toggleCollapsed}>Github ⚙️</Button>
      <Button onClick={toggleCollapsed}>Kontakt ⚙️</Button>
    </NavBarContainer>
  );
};

export default NavBar;
