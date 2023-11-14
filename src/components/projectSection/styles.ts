import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
  background-color: rgb(30, 30, 30);
`;

export const ProjectImage = styled.img`
  border-radius: 10px;
  height: auto;
  width: 40%;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 85%;
  }

  @media only screen and (max-width: 800px) {
    margin: auto;
  }

  @media only screen and (min-width: 1400px) {
    width: 40%;
  }
  @media only screen and (min-width: 1600px) {
    width: 40%;
  }

  @media only screen and (min-width: 1900px) {
    width: 35%;
  }
`;

export const StyledP = styled.p`
  margin: auto;
  width: 60%;
  padding: 1.5rem;
`;
