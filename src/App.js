import { useState } from "react";
import Form from "./Form";
import Container from "./Container";
import { currencies } from "./currencies";
import { Result } from "./Result";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <div>
          <Form
            result={result}
            calculateResult={calculateResult}
          />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
