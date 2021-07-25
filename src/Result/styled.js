import styled from "styled-components";

export const FormResult = styled.fieldset` 
    border: 1px solid rgba(0, 0, 0, 0.76);
    background-color: ${({ theme }) => theme.color.white};
    margin: 0 auto;
    margin: 20px;
    align-items: center;
    justify-content: center;
    flex-basis: 700px;
    padding: 40px;
    }

@media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      max-width: 90%;
      padding: 10px;
}
`;

export const SourceRates = styled.p` 
    font-size: 16px;
    color: ${({ theme }) => theme.color.teal};
    }
`;
