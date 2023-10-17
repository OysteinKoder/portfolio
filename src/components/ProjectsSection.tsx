import { useEffect, useMemo, useState } from "react";
import { StyledImage, StyledLink } from "./common";
import learnCode2 from "../assets/learnCode2.jpg";
import jobloopImg from "../assets/jobloop_img.png";
import gptBible from "../assets/gpt_bible.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SubTitle } from "./profileSection/cardStyles";
import { GoLinkExternal } from "react-icons/go";
import { Spacer, StyledSection, Wrapper } from "./uiHelpers/uiHelpers";
import { Container, ProjectImage } from "./projectSection/styles";

interface ProjectsProps {
  projects: {
    image: string;
    alt: string;
    text: string;
    link: string;
    ariaLabel: string;
  }[];
}

// To add new project to carousel, add new object to projects array.
const projects: ProjectsProps = {
  projects: [
    {
      image: learnCode2,
      alt: "Computer with code on screen",
      text: "Learn React",
      link: "https://github.com/OysteinKoder/react_lessons",
      ariaLabel: "Link to github repo",
    },
    {
      image: gptBible,
      alt: "Ai reading a bible",
      text: "Teen GPT Bible",
      link: "https://github.com/OysteinKoder/react_lessons",
      ariaLabel: "Link to github repo",
    },
    {
      image: jobloopImg,
      alt: "Jobloop icon",
      text: "Jobloop Website",
      link: "https://jobloop.no/",
      ariaLabel: "Link to jobloop.no",
    },
  ],
};

type Props = {
  reference: any;
};

const ProjectsSection = ({ reference }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)),
    [reference]
  );

  useEffect(() => {
    observer.observe(reference.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StyledSection
        ref={reference}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2>Prosjekter</h2>
        <Spacer size="medium" />
        <Container>
          <h3>Learn React Repo</h3>
          <Spacer size="small" />
          <ProjectImage src={learnCode2} alt="Computer with code on screen" />
          <Spacer size="small" />
          <p>
            Dette
            <a
              href="https://github.com/OysteinKoder/react-lessons-3.0"
              title="link to learn react repo"
              rel="external"
              target="_blank"
            >
              {" "}
              github repoet <GoLinkExternal />{" "}
            </a>
            kan man bruke til å lære seg grunnleggende react med routing, hooks
            og state management.
          </p>
        </Container>
        <Spacer size="medium" />
        <Container>
          <h3>Jobloop nettside</h3>
          <Spacer size="small" />
          <ProjectImage src={jobloopImg} alt="jobloop logo" />
          <Spacer size="small" />
          <p>
            Drifting og vedlikehold av
            <a
              href="https://jobloop.no/"
              title="jobloop.no link"
              rel="external"
              target="_blank"
            >
              {" "}
              jobloop <GoLinkExternal />{" "}
            </a>
            sin nettside.
          </p>
        </Container>
      </StyledSection>
    </>
  );
};

export default ProjectsSection;
