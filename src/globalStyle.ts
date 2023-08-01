import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  font-weight: 600;
  font-size: 1.25rem;
  
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
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
  font-size: 3.2em;
  line-height: 1.1;
}

a {
  font-weight: 500;
  text-decoration: inherit;
}


p {
color: #86F591;
}

button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {

  }
  button {
    background-color: #f9f9f9;
  }
}

#root {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

.card {
  padding: 2em;
}
`;
