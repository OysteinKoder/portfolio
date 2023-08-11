import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

#root {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

html {
  margin: 0 auto;
  font-family: 'Inconsolata', monospace;

  line-height: 1.5;
  
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-align: left;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  color: #86F591;
}

main {
  width: 100vw;
  padding: 1rem;
}

h1 {
  line-height: 1.1;
  font-family: 'Karla', sans-serif;
}

h2 {
  font-family: 'Karla', sans-serif;
  text-align: center;
}

a {
  font-weight: 500;
  text-decoration: inherit;
}


p {
color: #86F591;
}

i {
  font-family: 'Inconsolata', monospace;
  font-style: italic;
  font-weight: 200;
}

/* @media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {

  }
  button {
    background-color: #f9f9f9;
  }
} */

// Styling for the react-icons dependency

.nav-icons {
  font-size: 1.5rem;
  vertical-align: text-bottom;
}

.testCss {
  background-color: magenta;
}

.social-media-icons {
  font-size: 1.75rem;
}

:focus {
  outline: solid white;
}

// animations

.fade-in-section {
  opacity: 0;
  visibility: hidden;
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
}
.fade-in-section.is-visible {
  opacity: 1;
  transform: none;
  visibility: visible;
}


@media screen and (min-width: 2440px) {
  html {
    width: 2440px;
  }
}


`;
