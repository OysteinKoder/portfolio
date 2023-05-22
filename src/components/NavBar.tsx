import { FC } from "react";
import { NavBarContainer } from "./navBar/navBarStyles";
import { Button } from "./Button";
import { CollapsedContext } from "../context/globalContext";
import { useContext } from "react";
import { AiFillHome, AiFillMail, AiOutlineMail } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";

interface NavBarContainerProps {
  collapsed: boolean;
  profileRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavBar: FC<NavBarContainerProps> = ({
  collapsed,
  projectsRef: projectsRef,
  profileRef: profileRef,
  contactRef: contactRef,
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
  const toContact = () => {
    console.log("clicked");
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <Button onClick={toContact}>
        Kontakt <AiFillMail />
      </Button>
    </NavBarContainer>
  );
};

export default NavBar;
