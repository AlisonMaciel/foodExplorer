import { keyframes, styled } from "styled-components";
import { BREAK_POINTS } from "../../styles/breakPoints";

const ordersAnimation = keyframes`
  from {
    transform: translateY(-100%);
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
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.Dark[400]};
    overflow-y: hidden;
    
    .section-desktop {
        display: none;
    }

    .section-mobile {
      flex-grow: 1;
    }

    .button-advance {
        display: flex;
        justify-self: end;
        width: 13.5rem;
        margin: 0 auto;
    }

    > footer {
        width: 100%;
        padding: 2.5rem 1rem;
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        max-width: 100%;

        .section-mobile {
            display: none;
        }

        .section-desktop {
            max-width: 69.87rem;
            display: flex;
            flex-grow: 1;
            gap: 2rem;
        }

        > footer {
            padding: 2.5rem 1rem;
        }
    }

    @media (min-width: ${BREAK_POINTS.LG}) {
        .section-desktop {
            gap: 5rem;
            margin: 0 auto;
        }
    }
`;

export const Section = styled.div`
    max-width: 100%;
    height: 35rem;
    margin: 4.68rem 0rem 1rem 2.18rem;
    overflow-y: auto;
    animation: ${ordersAnimation} 600ms ease-in-out;

    h1 {
        font-weight: 500;
        font-size: 2rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.Light[300]};
        margin-bottom: 1.6rem;
    }

    h2 {
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.Light[300]};
        margin: 1rem 0 2.93rem;
    }

    .orders {
        display: flex;
        align-items: center;
        gap: 13px;
        max-width: 22.43rem;
        padding: 1rem 0;

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
            margin-right: 10px;
            word-break: break-word;
        }

        strong {
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.Light[400]};
        }

        button {
            display: block;
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

    &[data-orders="false"] {
        display: none;
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        max-width: 27.75rem;
        margin: 2.6rem 0;
        padding-left: 1rem;
        animation: ${ordersAnimation} 1s ease-in-out;

        .orders {
            max-width: 27.75rem;
            display: flex;
            align-items: center;
            gap: 13px;
            padding: 1rem 1rem 0 0;

            span {
                font-size: 1.5rem;
            }

            strong {
              display: inline-block;
              text-align: start;
            }

            h1 {
                margin-bottom: 2rem;
            }

            button {
              font-size: 1.18rem;
            }
        }
    }

    @media (min-width: 769px) {
      max-height: 37rem;
      height: auto;
    }
`;

export const Payment = styled.div`
    max-width: 22.18rem;
    height: 20.18rem;
    margin: 3.5rem auto 21.06rem;
    display: none;
    animation: ${ordersAnimation} 550ms ease-in-out;

    h1 {
        font-weight: 500;
        font-size: 2rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.Light[300]};
        margin-bottom: 2rem;
    }

    .payment {
        border: 1px solid ${({ theme }) => theme.COLORS.Light[600]};
        border-radius: 8px;

        div {
            display: flex;
            align-items: center;
        }

        img {
            display: block;
            max-width: 10.37rem;
            margin: 2.3rem auto;
        }
    }

    button:nth-child(1) {
        border-radius: 8px 0 0 0;
    }

    button:nth-child(2) {
        border-radius: 0 8px 0 0;
    }

    &[data-Payment="true"] {
        display: block;
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        display: block;
        margin:  2.5rem 0;
        animation: ${ordersAnimation} 1.2s ease-in-out;

        .payment {
            width: 33.12rem;

            > div:nth-child(1) {
                display: flex;
                align-items: center;

                button {
                    display: flex;
                    justify-content: center;
                }
            }

            form {
                padding: 0 4rem;

                > button {
                    width: 100%;
                }

                .input-payment {
                    padding: 0.4rem;
                }
            }
        }

        button:nth-child(1) {
            border-radius: 8px 0 0 0;
            width: 100%;
        }

        button:nth-child(2) {
            border-radius: 0 8px 0 0;
            width: 100%;
        }
    }

    @media (min-width: ${BREAK_POINTS.XL}) {
        .payment {
            form {
                padding: 0 5.68rem;
            }
        }
    }
`;

export const Pix = styled.div`
    display: none;

    &[data-pix="true"] {
        display: block;
    }

    &[data-pix-desktop="true"] {
        display: block;
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        width: 33.12rem;
        
        .payment {
            height: 20rem;
    
            img {
                max-width: 10.87rem;
                margin: 1.8rem auto;
            }
        }
    }

    @media (min-width: ${BREAK_POINTS.XL}) {
        width: 33.12rem;
    }
`;

export const Credit = styled.div`
    display: none;

    &[data-credit="true"] {
        display: block;
    }

    &[data-credit-desktop="true"] {
        display: block;
    }

    .payment {
        height: 28.87rem;

        form {
            max-width: 100%;
            margin: 3.56rem 1.37rem;

            div {
                align-items: start;

                span {
                    margin-bottom: 0;
                }
            }

            .mmaa-cvc {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin: 2.31rem 0;

                span {
                    margin: 0;
                }
            }
            button {
                font-weight: 500;
                font-size: 0.87rem;
                line-height: 1.5rem;
            }
        }
    }

    @media (min-width: ${BREAK_POINTS.XL}) {
        width: 33.12rem;
    }
`;
