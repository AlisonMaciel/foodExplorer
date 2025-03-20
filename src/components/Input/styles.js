import {styled} from "styled-components"
import { BREAK_POINTS } from "../../styles/breakPoints"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    >span {
        color: ${({theme}) => theme.COLORS.Light[400]};
        font-weight: 400;
        font-size: 1rem;
        line-height: 100%;
        font-family: 'Roboto';
        margin-bottom: 0.80rem;
    }

    >div {
        display: flex;
        align-items: center;
        gap: 0.87rem;
        background-color: ${({theme}) => theme.COLORS.Dark[900]};
        border-radius: 5px;
        width: 100%;
        padding: 12px 14px;

        @media (min-width: ${BREAK_POINTS.MD}) {
            padding: 12px 3.68rem;
        }

        svg {
            width: 24px;
            height: 24px;
            color: ${({theme}) => theme.COLORS.Light[400]};
        }

        input {
            font-weight: 400;
            font-size: 1rem;
            line-height: 100%;
            background-color: transparent;
            border: none;
            width: 100%;
            outline: none;
            box-shadow: none;
            
            ::placeholder {
                color: ${({theme}) => theme.COLORS.Light[500]};
            }
        }
    }

`


