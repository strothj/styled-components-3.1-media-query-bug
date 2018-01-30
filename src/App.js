import React from "react";
import styled, { injectGlobal } from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HalfSquare = styled.div`
  width: 50%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    border: 4px solid black;

    @media (min-width: 1024px) {
      border: 2px solid black;
    }
  }
`;

const LeftSquare = HalfSquare.extend`
  background-color: red;
`;

const RightSquare = HalfSquare.extend`
  background-color: blue;
`;

const App = () => (
  <Container>
    <LeftSquare />
    <RightSquare />
  </Container>
);

export default App;

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, #root {
    margin: 0;
    height: 100%;
  }
`;
