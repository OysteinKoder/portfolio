import { GlobalStyle } from "./globalStyle";
import NavBar from "./components/NavBar";
import { ContentTest, FlexWrapper } from "./components/uiHelpers/uiHelpers";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  if (width > 470) {
    console.log("mobile");
    {
      return (
        <>
          <GlobalStyle />
          <FlexWrapper direction="row">
            <NavBar />
            <ContentTest>
              <h1>Hey</h1>
            </ContentTest>
          </FlexWrapper>
        </>
      );
    }
  } else {
    return <h1>hey</h1>;
  }
}

export default App;
