import styled from "styled-components";

interface FlexProps {
  direction: "row" | "column";
}

interface MainContentProps {
  collapsed: boolean;
}

export const FlexWrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction == "row"
      ? "row"
      : props.direction == "column"
      ? "column"
      : null};
  justify-content: space-between;
`;

export const MainContent = styled.main<MainContentProps>`
  flex: 85%;

  @media only screen and (max-width: 600px) {
    flex: ${(props) => (props.collapsed == true ? "100%" : "50%")};
  }
`;
