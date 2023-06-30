import { FC } from "react";
import { StyledImage, StyledLink } from "./common";
import learnCode2 from "../assets/learnCode2.jpg";
import jobloopImg from "../assets/jobloop_img.png";
import gptBible from "../assets/gpt_bible.jpg";
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

interface Props {
  reference: React.RefObject<HTMLDivElement>;
}

const Projects: FC<Props> = (props) => {
  return (
    <>
      <Spacer size="large" />
      <section
        ref={props.reference}
        style={{ width: "80%", margin: "auto", zIndex: "-1" }}
      >
        <SubTitle>Prosjekter</SubTitle>
        <Spacer size="medium" />
        <Carousel
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          centerSlidePercentage={60}
          centerMode={true}
          swipeable={true}
          showThumbs={false}
          showStatus={false}
        >
          {projects.projects.map((project, idx) => {
            return (
              <div key={idx}>
                <StyledImage src={project.image} alt="placeholder" />
                <p>
                  <StyledLink href={project.link}>
                    {project.text} <GoLinkExternal />
                  </StyledLink>
                </p>
              </div>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Projects;
