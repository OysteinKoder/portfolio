import { GlobalStyle } from "./globalStyle";
import NavBar from "./components/NavBar";
import { ContentTest, FlexWrapper } from "./components/uiHelpers/uiHelpers";

function App() {
  if (window.innerWidth > 768) {
    console.log("mobile");
    {
      return (
        <>
          <GlobalStyle />
          <FlexWrapper direction="row">
            <NavBar />
            <ContentTest>hey</ContentTest>
          </FlexWrapper>
        </>
      );
    }
  } else {
    return <h1>hey</h1>;
  }
}

export default App;
