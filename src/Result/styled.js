import styled from "styled-components";

export const FormResult = styled.p` 
    border: 1px solid rgba(0, 0, 0, 0.76);
    margin: 30px;
    background-color: ${({ theme }) => theme.color.white};
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-basis: 700px;
    margin: 20px;
    padding: 40px;
    }

@media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      max-width: 90%;
      font-size: 12px;
}
`;