import styled from "styled-components";

export const StyledImage = styled.img`
  padding: 3rem;
  height: 40vh;
  object-fit: contain;
  background-color: rgb(30, 30, 30);
`;

export const StyledLink = styled.a`
  margin-top: 5rem !important;
  color: rgb(134, 245, 145);
  font-size: 1.25rem;
  all: unset;
  cursor: pointer;
  margin: 0.5em;
  margin-top: 5rem;
  padding: 0.5em;

  &:hover {
    color: green;
  }
`;
