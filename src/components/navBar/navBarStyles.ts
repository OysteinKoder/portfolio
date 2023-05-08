import styled from "styled-components";

interface NavBarProps {
  collapsed: boolean;
}

export const NavBarContainer = styled.nav<NavBarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 15%;
  height: 100vh;
  margin-left: 0;
  border-right: 1px solid #86f591;

  @media only screen and (max-width: 600px) {
    flex: ${(props) => (props.collapsed == true ? "0%" : "50%")};
    display: ${(props) => (props.collapsed == true ? "none" : "flex")};
  }
`;

export const HamburgerContainer = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
  }
`;
