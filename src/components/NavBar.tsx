import { FC } from "react";
import { NavBarContainer } from "./navBar/navBarStyles";
import { Button } from "./Button";
import { CollapsedContext } from "../context/globalContext";
import { useContext } from "react";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
import { StyledLink } from "./common";
import { GoLinkExternal } from "react-icons/go";

interface NavBarContainerProps {
  isCollapsed: boolean;
  profileRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Nav: FC<NavBarContainerProps> = ({
  projectsRef: projectsRef,
  profileRef: profileRef,
  contactRef: contactRef,
}) => {
  const { toggleCollapsed, isCollapsed } = useContext(CollapsedContext);

  const toProfile = () => {
    profileRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleCollapsed();
  };

  const toProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleCollapsed();
    console.log("hey");
  };

  const toContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleCollapsed();
  };

  return (
    <NavBarContainer collapsed={isCollapsed}>
      <Button onClick={toProfile}>
        Om Meg <AiFillHome />
      </Button>
      <Button onClick={toProjects}>
        Prosjekter <AiFillFolder />
      </Button>
      <Button onClick={toContact}>
        Kontakt <AiFillMail />
      </Button>
      <StyledLink onClick={toggleCollapsed}>
        Github <GoLinkExternal />
      </StyledLink>
    </NavBarContainer>
  );
};

export default Nav;
