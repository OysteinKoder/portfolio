import { GlobalStyle } from "./globalStyle";
import { CollapsedContext } from "./context/globalContext";
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <CollapsedContext.Provider value={{ isCollapsed, toggleCollapsed }}>
        <IconContext.Provider value={{ className: "link-icons" }}>
          <GlobalStyle />
          <LandingPage />
        </IconContext.Provider>
      </CollapsedContext.Provider>
    </>
  );
}

export default App;
