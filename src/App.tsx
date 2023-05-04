import { GlobalStyle } from "./globalStyle";
import NavBar from "./components/NavBar";
import { ContentTest, FlexWrapper } from "./components/uiHelpers/uiHelpers";

function App() {
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

export default App;
