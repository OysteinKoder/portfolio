import styled from "styled-components";

interface FlexProps {
  direction: "row" | "column";
  flexWrap?: "wrap";
  justifyContent?: "space-between" | "center";
  alignItems?: "center";
  marginLeft?: "small" | "medium" | "large";
  marginRight?: "small" | "medium" | "large";
  width?: "medium";
  margin?: "auto";
  leftOnMobile?: boolean;
}

interface MainContentProps {
  collapsed: boolean;
}

export const Wrapper = styled.div<FlexProps>`
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
  width: ${(props) => (props.width == "medium" ? "80%" : "100%")};
  flex-wrap: ${(props) => (props.flexWrap == "wrap" ? "wrap" : null)};
  align-items: ${(props) => (props.alignItems == "center" ? "center" : null)};
  margin-left: ${(props) =>
    props.marginLeft == "small"
      ? "2rem"
      : props.marginLeft == "medium"
      ? "5rem"
      : props.marginLeft == "large"
      ? "10rem"
      : null};
  margin-right: ${(props) =>
    props.marginRight == "small"
      ? "2rem"
      : props.marginRight == "medium"
      ? "5rem"
      : props.marginRight == "large"
      ? "10rem"
      : null};

  margin: ${(props) => (props.margin == "auto" ? "auto" : null)};

  column-gap: 2rem;
  @media only screen and (max-width: 1400px) {
    margin-left: ${(props) => (props.leftOnMobile == false ? "null" : "0")};
  }
`;

export const Main = styled.main<MainContentProps>`
  flex: 85%;
  padding: 0.25rem;
`;

export const Spacer = styled.div<{ size: "small" | "medium" | "large" }>`
  margin-top: ${(props) =>
    props.size == "small"
      ? "1rem"
      : props.size == "medium"
      ? "3rem"
      : props.size == "large"
      ? "10rem"
      : null};
`;

interface StyledSectionProps {
  color?: "black" | "grey";
}

export const StyledSection = styled.section<StyledSectionProps>`
  margin: auto;
  z-index: -1;
  background-color: ${(props) =>
    props.color == "black" ? "rgb(25, 25, 25)" : "null"};
  border-radius: 3px;
  padding: 5rem 10% 5rem 10%;
`;
