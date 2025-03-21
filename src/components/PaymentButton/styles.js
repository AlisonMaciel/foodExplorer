import { styled } from "styled-components";
import { BREAK_POINTS } from "../../styles/breakPoints";

export const Container = styled.button`
    display: flex;
    align-items: center;
    padding: 12px 14px;
    gap: 8px;

    width: 11.06rem;
    height: 5.06rem;

    border: 1px solid ${({theme}) => theme.COLORS.Light[600]};
    border-radius: 8px 8px 0 0;
    background-color: ${({theme}) => theme.COLORS.Dark[800]};

    color: ${({theme}) => theme.COLORS.Light[100]};

    >svg {
      color: ${({theme}) => theme.COLORS.Light[100]};
    }
`;
