import {styled} from "styled-components"

import { BREAK_POINTS } from "../../styles/breakPoints"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 26.75rem;
    margin: 0 auto;
    padding: 9.87rem, 1.93rem, 21.18rem, 4.06rem;
    background-color: ${({theme}) => theme.COLORS.Dark[400]};

    @media (min-width: ${BREAK_POINTS.MD}) {
        max-width: 100%;
        display: flex;
        flex-direction: row;
    }
    
    @media (min-width: ${BREAK_POINTS.LG}) {
        gap: 19.12rem;
    }
    >img {
        height: 2.75rem;
    }

    >img:hover {
        filter: brightness(0.9);
    }

    >form {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 19.75rem;
        margin-top: 2.56rem;

        a {
            text-align: center;
            color: ${({theme}) => theme.COLORS.Light[100]};
            font-weight: 500;
            font-size: 0.87rem;
            line-height: 1.5rem;  
        }

        h1 {
            display: none;
            font-weight: 500;
            font-size: 32px;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.Light[100]};
        }

        div:nth-child(4) {
          >div {
            padding: 10px;
          }
        }

        .input-form {
            padding: 5px;
        }

        .button-signUp {
            width: 100%;
        }

        @media (min-width: ${BREAK_POINTS.MD}) {
            width: 29.75rem;
            background-color: ${({theme}) => theme.COLORS.Dark[700]} ;
            padding: 4rem;
            border-radius: 1rem;

            h1 {
                display: block;
                text-align: center;
            }
       }
    }
`


