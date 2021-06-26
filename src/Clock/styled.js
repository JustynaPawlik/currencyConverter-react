import styled from "styled-components";

export const ClockElement = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    padding: 20px;
}

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      font-size: 12px;
    }
}
`;