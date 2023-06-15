import styled from "styled-components";

export const StyledImage = styled.img<{ size: "small" | "medium" | "large" }>`
  width: ${(props) =>
    props.size == "small"
      ? "30% !important"
      : props.size == "medium"
      ? "50% !important"
      : props.size == "large"
      ? "100% !important"
      : null};
  object-fit: contain;
  border-radius: 10px;
`;

export const StyledLink = styled.a`
  margin-top: 5rem !important;
  color: rgb(134, 245, 145);
  font-size: 1.5rem;
  all: unset;
  cursor: pointer;
  margin: 0.5em;
  margin-top: 5rem;
  padding: 0.5em;
`;
