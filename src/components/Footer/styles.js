import {styled} from "styled-components"
import { BREAK_POINTS } from "../../styles/breakPoints"

export const Container = styled.footer`
    display: flex;
    background-color: ${({theme}) => theme.COLORS.Dark[600]};
    height: 4.81rem;
    max-width: 100%;
    padding: 0.5rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70.12rem;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;
        color: ${({theme}) => theme.COLORS.Light[200]};
        
        img {
            width: 10.12rem;
            max-width: 11.62rem;
        }
        
        @media(min-width: ${BREAK_POINTS.MD}) {
            margin: 0 auto;
            
            p {
                font-weight: 400;
                font-size: 0.87rem;
                line-height: 160%;
    
            }
        }
    }
`


