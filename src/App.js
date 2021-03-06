import Form from "./Form";
import Container from "./Container";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
          <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;

