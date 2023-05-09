import styled from "styled-components";

export const StyledCard = styled.section`
  height: 80%;
  width: 80%;
  border: 2px solid red;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 100%;
  }
`;

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Testbox = styled.div`
  background-color: purple;
  height: 100%;
  width: 100%;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 50%;
`;
