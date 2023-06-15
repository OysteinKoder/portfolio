import { FC } from "react";
import { StyledImage, StyledLink } from "./common";
import learnCode2 from "../assets/learnCode2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SubTitle } from "./cardProfile/cardStyles";
import { GoLinkExternal } from "react-icons/go";
import { MarginSpacer } from "./uiHelpers/uiHelpers";

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
      image: learnCode2,
      alt: "Computer with code on screen",
      text: "Learn React",
      link: "https://github.com/OysteinKoder/react_lessons",
      ariaLabel: "Link to github repo",
    },
  ],
};

interface Props {
  reference: React.RefObject<HTMLDivElement>;
}

const ProjectCarousel: FC<Props> = (props) => {
  return (
    <div ref={props.reference}>
      <SubTitle>Prosjekter</SubTitle>
      <MarginSpacer size="medium" />
      <Carousel showIndicators={false} dynamicHeight={false}>
        {projects.projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div>
                <StyledImage
                  size="medium"
                  src={project.image}
                  alt="placeholder"
                />
                <p>
                  <StyledLink
                    href="https://github.com/OysteinKoder/react_lessons"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.ariaLabel}
                  >
                    {project.text} <GoLinkExternal />
                  </StyledLink>
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
