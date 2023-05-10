import styled from "styled-components";

export const StyledCard = styled.section`
  height: 80%;
  width: 80%;
  /* border: 2px solid red; */
  margin: auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 100%;
  }
`;

export const Testbox = styled.div`
  background-color: purple;
  height: 100%;
  width: 100%;
`;

export const StyledCardImage = styled.img`
  width: 80%;
  object-fit: contain;
  border-radius: 50%;
  margin: auto;
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  border-bottom: 1px solid #86f591;
`;

export const CardHeading = styled.h2`
  font-size: 1.5rem;
  border-bottom: 1px solid #86f591;
  width: fit-content;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledUl = styled.ul`
  padding-left: 1rem;
  text-align: left;
`;
