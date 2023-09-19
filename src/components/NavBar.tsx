import {
  NavBarContainer,
  SocialMediaContainer,
  SocialMediaLink,
} from "./sideBar/navBarStyles";
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
import { GoBriefcase } from "react-icons/go";

type NavBarContainerProps = {
  isCollapsed: boolean;
  profileRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
};

const Sidebar = ({
  projectsRef,
  profileRef,
  contactRef,
  experienceRef,
}: NavBarContainerProps) => {
  const { toggleCollapsed, isCollapsed } = useContext(CollapsedContext);

  const toProfile = () => {
    profileRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleCollapsed();
  };

  const toExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleCollapsed();
  };

  const toProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleCollapsed();
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
      <Button
        onClick={toExperience}
        aria-label="to profile section"
        role="tab"
        aria-selected="true"
      >
        Erfaring <GoBriefcase className="nav-icons" />
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

export default Sidebar;
