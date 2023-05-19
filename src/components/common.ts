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
