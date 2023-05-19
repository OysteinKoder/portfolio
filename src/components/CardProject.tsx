import { FC } from "react";
import { StyledCard, StyledCardImage } from "./cardProfile/cardStyles";

const CardProject: FC = () => {
  return (
    <StyledCard>
      <div>test</div>
      <div>test</div>
      <StyledCardImage
        variant="project"
        src="https://picsum.photos/200/300"
        alt="test"
      />
    </StyledCard>
  );
};

export default CardProject;
