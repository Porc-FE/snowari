import Home from "./pages/Home";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

const Layout = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
            margin: 0;
            padding: 0;
            font-family: "PP NeueBit", sans-serif;
            background: #f7f8fa;
          }
          #root {
            height: 100%;
          }
        `}
      />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
