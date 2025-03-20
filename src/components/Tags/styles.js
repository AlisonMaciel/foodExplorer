import {styled} from "styled-components"

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.Dark[1000]};
    border-radius: 5px;
    padding: 4px 8px;
    
    >span {
        font-weight: 500;
        font-size: 0.87rem;
        line-height: 24px;
        color:  ${({theme}) => theme.COLORS.Light[100]};
    }
`

