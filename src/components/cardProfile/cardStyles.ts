import styled from "styled-components";

export const StyledCard = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr auto auto auto;
    grid-row-gap: 5rem;
  }
`;

export const StyledCardImage = styled.img`
  object-fit: contain;
  border-radius: 50%;
  margin: auto;
  @media only screen and (max-width: 1400px) {
    width: 85%;
  }
  width: 65% !important;
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #86f591;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem 1rem 1rem 1rem;
  width: auto;
  margin: auto;
`;

export const CardHeading = styled.h3`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  width: fit-content;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTechP = styled.p<{ color?: string }>`
  color: black;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 15px;
  background-color: ${(props) => props.color};
`;
