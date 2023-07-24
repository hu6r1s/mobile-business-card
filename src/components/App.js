import { GlobalStyles, FrameDiv } from "../styles/layout";
import AppRouter from "./Router";

function App() {
  return (
    <>
      <GlobalStyles />
      <FrameDiv>
        <AppRouter />
      </FrameDiv>
    </>
  );
}

export default App;
