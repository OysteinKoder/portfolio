import styled from "styled-components";

interface Props {
  direction: "row" | "column";
}

export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction == "row"
      ? "row"
      : props.direction == "column"
      ? "column"
      : null};
`;

export const ContentTest = styled.div`
  flex: 80%;
`;
