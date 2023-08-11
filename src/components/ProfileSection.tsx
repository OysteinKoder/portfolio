import {
  CardSection,
  CardTitle,
  StyledCard,
  StyledCardImage,
  StyledTechP,
} from "./profileSection/cardStyles";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Spacer, Wrapper } from "./uiHelpers/uiHelpers";

// This is a card component that can be used to display information in a card format.
// It has serval different props that can be used to display different information.
// It has 4 different "grid sections", see cardprops for more information.

const skills = {
  colors: [
    "#9aebff",
    "#a4f4c4",
    "#faf4a4",
    "#f78db3",
    "#b68fff",
    "#ff9b8f",
    "#f2e4ff",
  ],
  tech: [
    "# TypeScript ❤️",
    "# JavaScript",
    "# React❤️",
    "# Git",
    "# Css",
    "# Html",
    "# Styled Components",
  ],
};
const exploringSkills = {
  colors: ["#9aebff", "#a4f4c4", "#faf4a4", "#f78db3", "#b68fff"],
  tech: ["C#", "Vue.js", ".Net Core", "Tailwind", "Sql"],
};

interface CardProps {
  props: any;
  topLeftImage?: string;
  topLeftImageAlt?: string;
  topRightTitle?: string;
  topRightText?: string;
  bottomLeftTitle?: string;
  bottomLeftText?: string;
  bottomRightTitle?: string;
  bottomRightList?: string;
  reference: any;
}

const ProfileSection: FC<CardProps> = ({ props: props, reference }) => {
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
      <StyledCard
        ref={reference}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <StyledCardImage src={props.topLeftImage} alt={props.topLeftImageAlt} />
        <CardSection>
          <CardTitle>{props.topRightTitle}</CardTitle>
          <p>{props.topRightText}</p>
        </CardSection>

        <CardSection>
          <div>
            <h3>{props.bottomLeftTitle}</h3>
            <Wrapper direction="row" flexWrap="wrap">
              {skills.tech.map((skill, idx) => (
                <StyledTechP
                  color={skills.colors[idx]}
                  key={skills.colors[idx]}
                >
                  {skill}
                </StyledTechP>
              ))}
            </Wrapper>
          </div>
        </CardSection>

        <CardSection>
          <div>
            <h3>{props.bottomRightTitle}</h3>
            <Wrapper direction="row" flexWrap="wrap">
              {exploringSkills.tech.map((skill, idx) => (
                <StyledTechP
                  color={exploringSkills.colors[idx]}
                  key={exploringSkills.colors[idx]}
                >
                  {skill}
                </StyledTechP>
              ))}
            </Wrapper>
          </div>
        </CardSection>
      </StyledCard>
      <Spacer size="medium" />
    </>
  );
};

export default ProfileSection;
