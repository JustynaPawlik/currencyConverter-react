import styled from "styled-components";

export const FormFieldset = styled.fieldset`
    border: 1px solid rgba(0, 0, 0, 0.76);
    margin: 30px;
    background-color: ${({ theme }) => theme.color.white};
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-basis: 700px;
    margin: 20px;
    padding: 40px;
    border-radius: 20px;
}
  
@media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      max-width: 90%;
      font-size: 12px; 
}
`;

export const Header = styled.legend`
    border: solid 1px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    box-shadow: 1px 1px 17px 0px ${({ theme }) => theme.color.boxShadow};
    padding: 10px;
    font-size: 34px;
    text-transform: uppercase;
    margin: auto;
    align-items: center;
}
`;

export const FormButton = styled.button`
    display: block;
    margin: auto;
    border: none;
    padding: 10px;
    max-width: 200px;
    width: 100%;
    box-shadow: 1px 1px 17px 0px ${({ theme }) => theme.color.boxShadow};
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 30px;
    margin-top: 30px;
}

    &: hover {
    background-color: ${({ theme }) => theme.color.lightTeal};
  }
  
    &: active {
    background-color: ${({ theme }) => theme.color.activeTeal};
  }
`;

export const Loading = styled.p`
color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.color.crimson};
`;