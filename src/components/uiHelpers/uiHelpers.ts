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

  @media only screen and (max-width: 1400px) {
    margin-left: 0;
  }
`;

export const MainContent = styled.main<MainContentProps>`
  flex: 85%;

  @media only screen and (max-width: 600px) {
    flex: ${(props) => (props.collapsed == true ? "100%" : "50%")};
  }
`;
export const LineSeparator = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  border-bottom: 1px solid #86f591;
`;

export const MarginSpacer = styled.div<{ size: "small" | "medium" | "large" }>`
  margin-top: ${(props) =>
    props.size == "small"
      ? "1rem"
      : props.size == "medium"
      ? "3rem"
      : props.size == "large"
      ? "10rem"
      : null};
`;
