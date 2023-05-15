import styled from "styled-components";

interface FlexProps {
  direction: "row" | "column";
  flexWrap?: "wrap";
  justifyContent?: "space-between" | "center";
  alignItems?: "center";
  marginSides?: "small" | "medium" | "large";
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
  justify-content: ${(props) =>
    props.justifyContent == "space-between"
      ? "space-between"
      : props.justifyContent == "center"
      ? "center"
      : null};
  columns: 2;
  width: 100%;
  flex-wrap: ${(props) => (props.flexWrap == "wrap" ? "wrap" : null)};
  align-items: ${(props) => (props.alignItems == "center" ? "center" : null)};
  margin-left: ${(props) =>
    props.marginSides == "small"
      ? "2rem"
      : props.marginSides == "medium"
      ? "5rem"
      : props.marginSides == "large"
      ? "10rem"
      : null};
  margin-right: ${(props) =>
    props.marginSides == "small"
      ? "2rem"
      : props.marginSides == "medium"
      ? "5rem"
      : props.marginSides == "large"
      ? "10rem"
      : null};
`;

export const MainContent = styled.main<MainContentProps>`
  flex: 85%;

  @media only screen and (max-width: 600px) {
    flex: ${(props) => (props.collapsed == true ? "100%" : "50%")};
  }
`;
