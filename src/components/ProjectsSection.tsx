import { useEffect, useMemo, useState } from "react";
import learnCode2 from "../assets/learnCode2.jpg";
import jobloopImg from "../assets/jobloop_img.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoLinkExternal } from "react-icons/go";
import { Spacer, StyledSection } from "./uiHelpers/uiHelpers";
import { Container, ProjectImage, StyledP } from "./projectSection/styles";

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
          <StyledP>
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
          </StyledP>
        </Container>
        <Spacer size="medium" />
        <Container>
          <h3>Jobloop nettside</h3>
          <Spacer size="small" />
          <ProjectImage src={jobloopImg} alt="jobloop logo" />
          <Spacer size="small" />
          <StyledP>
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
          </StyledP>
        </Container>
      </StyledSection>
    </>
  );
};

export default ProjectsSection;
