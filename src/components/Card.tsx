import { StyledCard } from "./card/cardStyles";
import { StyledCardContainer } from "./card/cardStyles";
import { Testbox } from "./card/cardStyles";

const Card = () => {
  return (
    <StyledCardContainer>
      <StyledCard>
        <h1>Card</h1>
        <Testbox />
        <Testbox />
        <Testbox />
      </StyledCard>
    </StyledCardContainer>
  );
};

export default Card;
