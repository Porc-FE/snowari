import Home from "./pages/Home";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: "PP NeueBit", sans-serif;
          }
        `}
      />
      <Home />
    </>
  );
}

export default App;
