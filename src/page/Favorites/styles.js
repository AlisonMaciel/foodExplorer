import {keyframes, styled} from "styled-components"

import { BREAK_POINTS } from "../../styles/breakPoints";

const ordersAnimation = keyframes`
   from {
    transform: translatex(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Container = styled.div`
    max-width: 35.41rem;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({theme}) => theme.COLORS.Dark[400]};

    >footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .h1-div {
        font-weight: 500;
        font-size: 2rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.Light[300]};
        display: none;
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
      max-width: 100%;

      >footer {
        margin-top: 1.5rem;
      }

      >div {
        max-width: 74rem;
        margin: 2rem auto;
      }

      .h1-div {
        display: block;
        padding-left: 2rem;
      }
    }

`

export const Section = styled.div`
    max-width: 100%;
    margin: 2.68rem 0rem 0rem 2.18rem;
    height: 50rem;
    overflow-y: scroll;
    
    h1 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.Light[300]};
      margin-bottom: 1.6rem;
    }

    .orders {
        display: flex;
        align-items: center;
        gap: 13px;
        max-width: 22.43rem;
        padding: 1rem 0;
        animation: ${ordersAnimation} 550ms ease-in;

        img {
            max-width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;
        }

        span {
            font-weight: 500;
            font-size: 1.1rem;
            line-height: 130%;
            color: ${({ theme }) => theme.COLORS.Light[300]};
            text-align: start;
            cursor: pointer;
        }

        button {
            font-weight: 400;
            font-size: 0.95rem;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.Tints.Tomato[400]};
            height: 19px;
            width: 11.95rem;
            border: none;
            background-color: transparent;
            text-align: start;
        }
    }
    
    @media (min-width: ${BREAK_POINTS.MD}) {
      display: flex;
      flex-wrap: wrap;
      max-height: 50.5rem;
      height: auto;
      margin: 2rem 0 0 0;
      padding-left: 1rem;

      .orders {
        height: fit-content;
        padding-bottom: 2.5rem;
        max-width: 17.5rem;
      }

      h1 {
        display: none;
      }
    }

    @media (min-width: 769px) {
      max-height: 38rem;
    }
`;
