import {
  CardHeading,
  CardSection,
  CardTitle,
  StyledCard,
  StyledCardImage,
  StyledUl,
} from "./card/cardStyles";
import { FC } from "react";

const techIcons = {
  react:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
};

const skills = ["C#", "Vue.js", ".Net Core", "Tailwind"];

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
  bottomLeftText: bottomLeftText,
  bottomRightTitle: bottomRightTitle,
  bottomRightList: bottomRightList,
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
          <p>{bottomLeftText}</p>
        </CardSection>
        <CardSection>
          <div>
            <CardHeading>{bottomRightTitle}</CardHeading>
            <StyledUl>
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </StyledUl>
          </div>
        </CardSection>
      </StyledCard>
    );
  } else {
    return <h1>hei</h1>;
  }
};

export default Card;
