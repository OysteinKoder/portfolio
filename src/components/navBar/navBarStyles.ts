import styled from "styled-components";

interface NavBarProps {
  collapsed: boolean;
}

export const NavBarContainer = styled.nav<NavBarProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 100vh;
  margin-left: 0;
  border-right: 1px solid #86f591;
  z-index: 1;

  @media only screen and (max-width: 1400px) {
    flex: ${(props) => (props.collapsed == true ? "0%" : "50%")};
    display: ${(props) => (props.collapsed == true ? "none" : "flex")};
    position: fixed;
    background: rgb(26 25 25);
  }
`;

export const Positioner = styled.div<NavBarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 100vh;
  margin-left: 0;

  @media only screen and (max-width: 1400px) {
    flex: ${(props) => (props.collapsed == true ? "0%" : "50%")};
    display: ${(props) => (props.collapsed == true ? "none" : "flex")};
    position: fixed;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;

  @media only screen and (max-width: 1400px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
    height: fit-content;
  }
`;
