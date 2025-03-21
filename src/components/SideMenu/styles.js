import { styled } from "styled-components";
import { BREAK_POINTS } from "../../styles/breakPoints.js";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.Dark[400]};
    height: 100vh;
    position: fixed;
    z-index: 1;
    width: 26.66rem;
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    @media (min-width: 375px) {
      width: 31.25rem;

      footer {
        width: 31.25rem;
      }
    }

    @media (min-width: 425px) {
      width: 35.41rem;

      footer {
        width: 35.41rem;
      }
    }

    &[data-menu-is-open="true"] {
        transform: translateX(0);
        opacity: 1;
        pointer-events: auto;
    }

    >header {
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.Dark[700]};
        height: 7.12rem;
        padding-left: 1.15rem;
        padding-top: 45px;
        gap: 1rem;
        margin-bottom: 2.25rem;

        svg {
            font-size: 1.8rem;
            color: #FFFFFF;
            cursor: pointer; 
        }

        span {
            font-weight: 400;
            font-size: 1.31rem;
            line-height: 25px;
            color: #FFFFFF;
        }

    }

    >div {
        padding: 1rem 1.75rem;
    }

    img {
        width: 10.12rem;
        max-width: 11.62rem;
    }

    .toGoOut, .create, .favorites, .home {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.Light[300]};
        font-weight: 300;
        line-height: 140%;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark[1000]};
        padding: 10px;
        margin-top: 2.25rem;

        span {
            cursor: pointer;
        }

        a {
            color: ${({ theme }) => theme.COLORS.Light[300]};
        }
    }

    >footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 400;
        line-height: 1rem;
        color: ${({ theme }) => theme.COLORS.Light[200]};
        background-color: ${({ theme }) => theme.COLORS.Dark[600]};
        height: 77px;
        position: fixed;
        bottom: 0;
        width: 26.66rem;
        padding: 0;

        p {
          font-size: 0.75rem;
        }
    }

    @media (min-width: ${BREAK_POINTS.XL}) {
        .x {
            display: none;
        }
    }
`;
