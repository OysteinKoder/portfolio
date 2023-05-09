import { GlobalStyle } from "./globalStyle";
import { CollapsedContext } from "./context/globalContext";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed);
  };

  return (
    <>
      <CollapsedContext.Provider value={{ isCollapsed, toggleCollapsed }}>
        <GlobalStyle />
        <LandingPage />
      </CollapsedContext.Provider>
    </>
  );
}

export default App;
