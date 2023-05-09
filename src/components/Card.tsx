import { StyledCard, StyledCardImage } from "./card/cardStyles";
import { StyledCardContainer } from "./card/cardStyles";
import { FC } from "react";

const techIcons = {
  react:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
};

interface CardProps {
  variant?: "image" | "titleAndText" | "headerAndText" | "headerAndImage";
  text?: string;
  title?: string;
  image?: string;
  alt?: string;
}

const Card: FC<CardProps> = ({ variant, text, title, image, alt }) => {
  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledCardImage src={image} alt={alt} />
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <p>hey</p>
        <p>hey2</p>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default Card;
