import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  body {
    background-image: url(https://www.kobiecybialystok.pl/wp-content/uploads/2019/09/poradyprawne.jpg);
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    max-width: 1000px;
    margin: 20px auto;
    padding: 10px 10px;
    font-size: 24px;
    margin: 0 auto;
  }
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0px;
}
`;