import { useState } from "react";
import Form from "./Form";
import Container from "./Container";
import { Result } from "./Result";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <div>
          <Form />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

