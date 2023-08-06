import { FC } from "react";
import {
  NavBarContainer,
  SocialMediaContainer,
  SocialMediaLink,
} from "./navBar/navBarStyles";
import { Button } from "./Button";
import { CollapsedContext } from "../context/globalContext";
import { useContext } from "react";
import {
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";

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
      <Button
        onClick={toProfile}
        aria-label="to profile section"
        role="tab"
        aria-selected="true"
      >
        Om Meg <AiFillHome className="nav-icons" />
      </Button>
      <Button onClick={toProjects} aria-label="to projects section">
        Prosjekter <AiFillFolder className="nav-icons" />
      </Button>
      <Button onClick={toContact} aria-label="to contact section">
        Kontakt <AiFillMail className="nav-icons" />
      </Button>
      <SocialMediaContainer>
        <SocialMediaLink
          title="Github external link"
          href="https://github.com/OysteinKoder"
          rel="external"
          target="_blank"
        >
          <AiFillGithub className="social-media-icons" />
        </SocialMediaLink>
        <SocialMediaLink
          title="LinkedIn external link"
          href="https://www.linkedin.com/in/øystein-ellingsen-245958161"
          rel="external"
          target="_blank"
        >
          <AiFillLinkedin className="social-media-icons" />
        </SocialMediaLink>
      </SocialMediaContainer>
    </NavBarContainer>
  );
};

export default Nav;
