import styled from "styled-components";

interface NavBarProps {
  collapsed: boolean;
}

export const NavBarContainer = styled.nav<NavBarProps>`
  position: fixed;
  width: 12rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  margin-top: 0;
  border-right: 1px solid #86f591;
  z-index: 3;

  @media only screen and (max-width: 800px) {
    display: ${(props) => (props.collapsed == true ? "none" : "flex")};
    background-color: rgb(30, 30, 30);
    min-height: 115%;
    width: 100%;
    padding-bottom: 10%;
  }

  @media only screen and (max-width: 1400px) {
    background-color: rgb(30, 30, 30);
  }
`;

export const NavFrame = styled.div<NavBarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 115%;
  margin-left: 0;

  @media only screen and (max-width: 800px) {
    flex: ${(props) => (props.collapsed == true ? "0%" : "50%")};
    display: ${(props) => (props.collapsed == true ? "none" : "flex")};
    position: fixed;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  margin: 0.5em;
  margin-top: 5rem;
  padding: 0.5em;
  font-size: 1.25rem;
  justify-content: space-evenly;
  width: 80%;
`;

export const SocialMediaLink = styled.a`
  font-size: 1.5rem;
  color: #86f591;
  cursor: pointer;

  &:hover {
    color: rgb(182, 143, 255);
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
    height: fit-content;

    &:hover {
      color: rgb(182, 143, 255);
    }
  }
`;
