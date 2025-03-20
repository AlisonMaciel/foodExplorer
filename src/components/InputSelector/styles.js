import {styled} from "styled-components"
import { BREAK_POINTS } from "../../styles/breakPoints"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >span {
        color: ${({theme}) => theme.COLORS.Light[400]};
        font-weight: 400;
        font-size: 1rem;
        line-height: 100%;
        font-family: 'Roboto';
    }
    
    >div {
        display: flex;
        align-items: center;
        position: relative;
        background-color: ${({theme}) => theme.COLORS.Dark[900]};
        border-radius: 5px;
        width: 100%;
        padding: 12px 14px;

        select {
            width: 100%;
            background-color: ${({theme}) => theme.COLORS.Dark[900]};
            color: ${({theme}) => theme.COLORS.Light[400]};
            border: none;
            outline: none;
            cursor: pointer;
        }
        
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        max-width: 22.75rem;
        
        span {
            margin-bottom: 0.4rem;
        }

        div {
            width: 16.75rem;
            padding: 13px;
            background-color: ${({theme}) => theme.COLORS.Dark[800]};
            
            select {
                background-color: ${({theme}) => theme.COLORS.Dark[800]};
            }
        }

    }

    @media (min-width: 897px) {
        div {
            width: 22.75rem;
        }
    }

`