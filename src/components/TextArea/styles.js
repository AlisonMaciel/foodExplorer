import {styled} from "styled-components"

export const Container = styled.textarea`
    max-width: 100%;
    height: 10.75rem;
    padding: 14px;
    background: ${({theme}) => theme.COLORS.Dark[800]};
    color: ${({theme}) => theme.COLORS.Light[100]};
    border-radius: 8px;
    border: none;
    font-weight: 400;
    font-size: 1rem;
    line-height: 100%;

    ::placeholder {
        color: ${({theme}) => theme.COLORS.Light[500]};
    }
`
