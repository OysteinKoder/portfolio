import {
  CardHeading,
  CardSection,
  CardTitle,
  StyledCard,
  StyledCardImage,
  StyledTechP,
  StyledUl,
} from "./card/cardStyles";
import { FC } from "react";
import { FlexWrapper } from "./uiHelpers/uiHelpers";

// This is a card component that can be used to display information in a card format.
// It has sevral different props that can be used to display different information.
// It has 4 different "grid sections", see cardprops for more information.

const skills = {
  colors: ["#9aebff", "#a4f4c4", "#faf4a4", "#f78db3"],
  tech: ["C#", "Vue.js", ".Net Core", "Tailwind"],
};
const technologies = {
  colors: ["#9aebff", "#a4f4c4", "#faf4a4", "#f78db3", "#b68fff", "#ff9b8f"],
  tech: [
    "# TypeScript ❤️",
    "# JavaScript",
    "# React❤️",
    "# Git",
    "# Css",
    "# Html",
  ],
};

interface CardProps {
  variant?: "image" | "titleAndText" | "headerAndText" | "headerAndImage";
  topLeftImage?: string;
  topLeftImageAlt?: string;
  topRightTitle?: string;
  topRightText?: string;
  bottomLeftTitle?: string;
  bottomLeftText?: string;
  bottomRightTitle?: string;
  bottomRightList?: string;
}

const Card: FC<CardProps> = ({
  variant,
  topLeftImage: topLeftImage,
  topLeftImageAlt: topLeftImageAlt,
  topRightText: topRightText,
  topRightTitle: topRightTitle,
  bottomLeftTitle: bottomLeftTitle,
  bottomRightTitle: bottomRightTitle,
}) => {
  if (variant === "image") {
    return (
      <StyledCard>
        <StyledCardImage src={topLeftImage} alt={topLeftImageAlt} />
        <CardSection>
          <CardTitle>{topRightTitle}</CardTitle>
          <p>{topRightText}</p>
        </CardSection>
        <CardSection>
          <CardHeading>{bottomLeftTitle}</CardHeading>
          <FlexWrapper direction="row" flexWrap="wrap">
            {technologies.tech.map((tech, idx) => (
              <StyledTechP color={technologies.colors[idx]} key={idx}>
                {tech}
              </StyledTechP>
            ))}
          </FlexWrapper>
        </CardSection>
        <CardSection>
          <div>
            <CardHeading>{bottomRightTitle}</CardHeading>
            <FlexWrapper direction="row" flexWrap="wrap" marginSides="small">
              {skills.tech.map((skill, idx) => (
                <StyledTechP color={skills.colors[idx]} key={idx}>
                  {skill}
                </StyledTechP>
              ))}
            </FlexWrapper>
          </div>
        </CardSection>
      </StyledCard>
    );
  } else {
    return <h1>hei</h1>;
  }
};

export default Card;
