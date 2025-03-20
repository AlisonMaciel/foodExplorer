import { keyframes, styled } from "styled-components";

import {BREAK_POINTS} from "../../styles/breakPoints"

const updateAnimation = keyframes`
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
    max-width: 26.75rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.COLORS.Dark[400]};
    display: flex;
    flex-direction: column;

    .create-mobile {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin: 1rem 1.5rem 4.68rem;

        div:nth-child(7) {
          animation: ${updateAnimation} 800ms ease-in-out;
        }
        div:nth-child(6) {
          animation: ${updateAnimation} 700ms ease-in-out;
        }
        div:nth-child(5) {
          animation: ${updateAnimation} 600ms ease-in-out;
        }
        div:nth-child(4) {
          animation: ${updateAnimation} 500ms ease-in-out;
        }
        div:nth-child(3) {
          animation: ${updateAnimation} 400ms ease-in-out;
        }
        .textarea {
          animation: ${updateAnimation} 900ms ease-in-out;
        }

        .save-remove {
          animation: ${updateAnimation} 1s ease-in-out;
        }

        a {
            display: flex;
            align-items: center;
            gap: 5px;
            color: ${({ theme }) => theme.COLORS.Light[300]};
            font-weight: 500;
            font-size: 0.9rem;
            line-height: 140%;

            svg {
                font-size: 1.7rem;
            }
        }

        h1 {
            font-weight: 500;
            font-size: 1.7rem;
        }

        span {
            color: ${({ theme }) => theme.COLORS.Light[400]};
            font-weight: 400;
            font-size: 1rem;
            line-height: 100%;
            font-family: "Roboto";
        }
    }

    .create-desktop {
        display: none;

        div:nth-child(7) {
          animation: ${updateAnimation} 800ms ease-in-out;
        }
        div:nth-child(6) {
          animation: ${updateAnimation} 700ms ease-in-out;
        }
        div:nth-child(5) {
          animation: ${updateAnimation} 600ms ease-in-out;
        }
        div:nth-child(4) {
          animation: ${updateAnimation} 500ms ease-in-out;
        }
        div:nth-child(3) {
          animation: ${updateAnimation} 400ms ease-in-out;
        }
        .textarea {
          animation: ${updateAnimation} 900ms ease-in-out;
        }

        .save-remove {
          animation: ${updateAnimation} 1s ease-in-out;
        }
    }

    .markers {
        > span {
            color: ${({ theme }) => theme.COLORS.Light[400]};
            font-weight: 400;
            font-size: 1rem;
            line-height: 100%;
            font-family: "Roboto";
        }
    }

    .bookmarkers {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        padding: 4px 8px;
        background-color: ${({ theme }) => theme.COLORS.Dark[800]};
        border-radius: 8px;
        margin-top: 1rem;
    }

    .save-remove {
        display: flex;
        align-items: center;
        gap: 2rem;

        .button-rose {
            background-color: ${({ theme }) => theme.COLORS.Tints.Tomato[400]};
            font-weight: 300;
            font-size: 14px;
            line-height: 1.5rem;
            margin: 0 auto;
            width: 100%;
            padding: 12px 0.80rem;
        }

        .button-dark {
            background-color: ${({ theme }) => theme.COLORS.Dark[800]};
            font-weight: 300;
            font-size: 14px;
            line-height: 1.5rem;
            padding: 12px 0.8rem;
        }
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        max-width: 100%;
        height: 100vh;

        .create-mobile {
          display: none;
        }
        
        .create-desktop {
            flex-grow: 1;
            display: block;
            max-width: 70rem;
            margin: 2.5rem 0;
            padding: 0 1rem;
            
            a {
                display: flex;
                align-items: center;
                gap: 5px;
                color: ${({ theme }) => theme.COLORS.Light[300]};
                font-weight: 600;
                font-size: 1.5rem;
                line-height: 140%;
                margin-bottom: 1.6rem;

                svg {
                    font-size: 2rem;
                }
            }

            h1 {
                font-weight: 500;
                font-size: 2rem;
                line-height: 140%;
                margin-bottom: 2rem;
            }

            >span {
                color: ${({ theme }) => theme.COLORS.Light[400]};
                font-weight: 400;
                font-size: 1rem;
                line-height: 100%;
                font-family: "Roboto";
                margin-bottom: 1rem;
            }

            .input-create {
                padding: 6px;
            }

            .dish-create {
                display: flex;
                align-items: center;
                gap: 2rem;
                margin-bottom: 2rem;
            }

            .markers {
                width: 100%;
            }

            .input-price {
                div {
                    width: 17.1rem;
                    padding: 12px 14px;
                    margin-right: 14px;
                }
            }

            .button-rose {
                width: 12.75rem;
                margin: 0;
                padding: 12px 1rem;
            }
            
            .button-dark {
                width: 9.43rem;
            }
            
            .save-remove {
                display: flex;
                justify-content: end;
                margin: 2rem 0 7.15rem;
            }
            
            textarea {
                margin-top: 1rem;
                width: 100%;
            }
        }
    }

    @media (min-width: 1023px) {
      height: auto;
    }

    @media (min-width: ${BREAK_POINTS.XL}) {
        .create-desktop {
          margin: 2.5rem auto;
          
            .button-rose {
                width: 10.75rem;
                margin: 0;
                padding: 12px 1rem;
            }
        }
    }

    @media (min-width: 1441px) {
      height: 100vh;
    }
`;
export const AvatarDish = styled.div`
    > span {
        color: ${({ theme }) => theme.COLORS.Light[400]};
        font-weight: 400;
        font-size: 1rem;
        line-height: 100%;
        font-family: "Roboto";
        margin-top: 1rem;
    }

    > label {
        display: flex;
        align-items: center;
        padding: 12px 32px;
        gap: 8px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.Dark[800]};
        margin-top: 1rem;
        cursor: pointer;

        span {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: ${({ theme }) => theme.COLORS.Light[100]};
        }

        svg {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.Light[100]};
        }
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        label {
            width: 16.31rem;
            margin-top: 1rem;
            padding: 9px 1.5rem;
        }
    }

    @media (min-width: ${BREAK_POINTS.XL}) {
        label {
            width: 14.31rem;
            margin-top: 1rem;
            padding: 9px 2rem;
        }
    }
`;
