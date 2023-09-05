import "react-responsive-carousel/lib/styles/carousel.min.css";

import Sidebar from "../components/NavBar";

import ProjectsSection from "../components/ProjectsSection";

import ProfileSection from "../components/ProfileSection";

import Hamburger from "../components/sideBar/Hamburger";

import { SidebarFrame } from "../components/sideBar/navBarStyles";

import { Main, Wrapper } from "../components/uiHelpers/uiHelpers";

import { useContext } from "react";

import { CollapsedContext } from "../context/globalContext";

import { cardContent } from "./cardContent/cardContent";

import { useRef, FC } from "react";

import { ContactSection } from "../components/ContactSection";

import ExperienceSection from "../components/ExperianceSection";

const LandingPage: FC = () => {
  const { isCollapsed } = useContext(CollapsedContext);

  const profileRef = useRef<HTMLDivElement>(null);

  const experienceRef = useRef<HTMLDivElement>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Wrapper direction="row">
        <SidebarFrame collapsed={isCollapsed} />
        <Sidebar
          isCollapsed={isCollapsed}
          experienceRef={experienceRef}
          projectsRef={carouselRef}
          profileRef={profileRef}
          contactRef={contactRef}
        />
        <Main collapsed={isCollapsed}>
          <Hamburger />
          <ProfileSection props={cardContent} reference={profileRef} />
          <ExperienceSection reference={experienceRef} />
          <ProjectsSection reference={carouselRef} />
          <ContactSection reference={contactRef} />
        </Main>
      </Wrapper>
    </>
  );
};

export default LandingPage;
