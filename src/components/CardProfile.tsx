import {
  CardHeading,
  CardSection,
  CardTitle,
  StyledCard,
  StyledCardImage,
  StyledTechP,
} from "./cardProfile/cardStyles";
import { FC } from "react";
import { FlexWrapper } from "./uiHelpers/uiHelpers";

// This is a card component that can be used to display information in a card format.
// It has serval different props that can be used to display different information.
// It has 4 different "grid sections", see cardprops for more information.

const skills = {
  colors: ["#9aebff", "#a4f4c4", "#faf4a4", "#f78db3", "#b68fff"],
  tech: ["C#", "Vue.js", ".Net Core", "Tailwind", "Sql"],
};
const exploringSkills = {
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
  props: any;
  topLeftImage?: string;
  topLeftImageAlt?: string;
  topRightTitle?: string;
  topRightText?: string;
  bottomLeftTitle?: string;
  bottomLeftText?: string;
  bottomRightTitle?: string;
  bottomRightList?: string;
  reference: React.RefObject<HTMLDivElement>;
}

const ProfileCard: FC<CardProps> = ({ props: props, reference }) => {
  return (
    <StyledCard ref={reference}>
      <StyledCardImage src={props.topLeftImage} alt={props.topLeftImageAlt} />
      <CardSection>
        <CardTitle>{props.topRightTitle}</CardTitle>
        <p>{props.topRightText}</p>
      </CardSection>
      <CardSection>
        <CardHeading>{props.bottomLeftTitle}</CardHeading>
        <FlexWrapper direction="row" flexWrap="wrap">
          {props.bottomLeftText.map((tech: any, idx: number) => (
            <StyledTechP color={exploringSkills.colors[idx]} key={idx}>
              {tech}
            </StyledTechP>
          ))}
        </FlexWrapper>
      </CardSection>
      <CardSection>
        <div>
          <CardHeading>{props.bottomRightTitle}</CardHeading>
          <FlexWrapper direction="row" flexWrap="wrap" marginLeft="small">
            {skills.tech.map((skill, idx) => (
              <StyledTechP color={skills.colors[idx]} key={skills.colors[idx]}>
                {skill}
              </StyledTechP>
            ))}
          </FlexWrapper>
        </div>
      </CardSection>
    </StyledCard>
  );
};

export default ProfileCard;
