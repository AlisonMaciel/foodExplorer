import {styled} from "styled-components"

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    text-align: center;
    padding: 0.75rem 2rem;
    width: 19.75rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.Tints.Tomato[100]};
    color: ${({theme}) => theme.COLORS.Light[100]};
    border: none;
    font-weight: 500;
    line-height: 1.5rem;
    font-size: 0.87rem;
`
