import { FC } from "react";
import { StyledImage, StyledLink } from "./common";
import learnCode2 from "../assets/learnCode2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SubTitle } from "./cardProfile/cardStyles";
import { GoLinkExternal } from "react-icons/go";
import { Spacer } from "./uiHelpers/uiHelpers";

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
      text: "Teen GPT Bible",
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
    <section
      ref={props.reference}
      style={{ width: "80%", margin: "auto", zIndex: "-1" }}
    >
      <SubTitle>Prosjekter</SubTitle>
      <Spacer size="large" />
      <Carousel showIndicators={false} infiniteLoop={true} showThumbs={false}>
        {projects.projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div>
                <StyledImage
                  size="medium"
                  src={project.image}
                  alt="placeholder"
                />
              </div>
              <Spacer size="medium" />
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
          );
        })}
      </Carousel>
    </section>
  );
};

export default ProjectCarousel;
