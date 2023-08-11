import styled from "styled-components";

export const StyledCard = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr auto auto auto;
    grid-row-gap: 5rem;
  }
`;

export const StyledCardImage = styled.img`
  object-fit: contain;
  border-radius: 50%;
  margin: auto auto auto 0;
  width: 85%;

  @media only screen and (max-width: 480px) {
    width: 85%;
  }

  @media only screen and (max-width: 800px) {
    margin: auto;
  }

  @media only screen and (min-width: 1400px) {
    width: 65%;
  }
  @media only screen and (min-width: 1600px) {
    width: 50%;
  }

  @media only screen and (min-width: 1900px) {
    width: 35%;
  }
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  padding-bottom: 1rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem 1rem 1rem 1rem;
  width: auto;
  margin: auto;
`;

export const CardSection = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const StyledTechP = styled.p<{ color?: string }>`
  color: black;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  margin: 1rem 1rem 1rem 0rem;
  border-radius: 15px;
  background-color: ${(props) => props.color};
`;
