import { keyframes, styled } from "styled-components";

import { BREAK_POINTS } from "../../styles/breakPoints.js";

const detailsAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
    max-width: 26.75rem;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.COLORS.Dark[400]};

    .details-mobile {
        max-width: 20rem;
        margin: 3rem 3.5rem 0;
        animation: ${detailsAnimation} 700ms ease-in-out;

        a {
            display: flex;
            align-items: center;
            gap: 6px;
            color: ${({ theme }) => theme.COLORS.Light[300]};
            font-weight: 500;
            font-size: 1.3rem;
            line-height: 140%;
            width: fit-content;

            svg {
                font-size: 2rem;
            }
        }

        img {
            display: flex;
            max-width: 16.5rem;
            height: 16.5rem;
            margin: 1rem auto;
            border-radius: 50%;
        }

        h2 {
            text-align: center;
            font-weight: 500;
            font-size: 1.68rem;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.Light[300]};
            margin: 1.5rem 0;
        }

        p {
            text-align: center;
            font-weight: 400;
            font-size: 1rem;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.Light[300]};
            margin: 1.5rem 0;
        }

        .tags {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            max-width: 100%;
            margin-bottom: 3rem;
        }

        div {
            display: flex;
            align-items: center;
            gap: 1rem;

            .add-decrease {
                font-size: 1.3rem;

                svg {
                    cursor: pointer;
                }
            }

            .mobile {
                padding: 10px;
            }
        }
    }

    .details-desktop {
        display: none;
        animation: ${detailsAnimation} 700ms ease-in-out;

        .add-decrease {
            font-size: 1.3rem;

            svg {
                cursor: pointer;
            }
        }
    }

    > footer {
        position: fixed;
        bottom: 0;
        margin-top: 2.37rem;
        width: 26.75rem;
        padding: 0 1rem;
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        max-width: 100%;
        height: 100vh;

        .details-mobile {
            display: none;
        }

        .details-desktop {
            display: flex;
            max-width: 69.69rem;
            margin: 3rem auto;

            a {
                display: flex;
                gap: 6px;
                color: ${({ theme }) => theme.COLORS.Light[300]};
                font-weight: 500;
                font-size: 1.3rem;
                line-height: 140%;
                height: fit-content;

                svg {
                    font-size: 2rem;
                }
            }

            .meal-info-desktop {
                display: flex;
                align-items: center;
                max-width: 69.69rem;
                margin: 3rem auto;
                gap: 2.93rem;

                img {
                    display: flex;
                    max-width: 19.37rem;
                    height: 24.31rem;
                    margin-left: -90px;
                    border-radius: 50%;
                }
            }

            .dish-description {
                display: flex;
                flex-direction: column;
                align-items: start;

                h2 {
                    font-weight: 400;
                    font-size: 1.7rem;
                    line-height: 140%;
                    color: ${({ theme }) => theme.COLORS.Light[300]};
                }

                p {
                    font-weight: 400;
                    line-height: 140%;
                    margin: 1.5rem 0;
                    font-size: 1rem;
                    text-align: start;
                    color: ${({ theme }) => theme.COLORS.Light[300]};
                    max-width: 30rem;
                }

                .tags {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 3rem;
                    max-width: 100%;
                }

                div {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    .button-desktop {
                        display: block;
                        width: 10.12rem;
                        padding: 12px 1.5rem;
                        gap: 8px;
                    }
                }

                .button-edit {
                    width: 131px;
                    padding: 12px 1.5rem;
                }

                .mobile {
                    display: none;
                }
            }
        }

        > footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            margin: 0 auto;

            div {
                width: 69.69rem;
                margin: 0 auto;
            }
        }
    }

    @media (min-width: ${BREAK_POINTS.LG}) {
        .details-desktop {
            display: flex;
            max-width: 69.69rem;
            margin: 3rem auto;

            img {
                display: flex;
                max-width: 24.37rem;
                height: 24.31rem;
                margin-left: -230px;
            }
        }
        .dish-description {
            h2 {
                font-weight: 400;
                font-size: 2.5rem;
                line-height: 140%;
                color: ${({ theme }) => theme.COLORS.Light[300]};
            }

            p {
                font-weight: 400;
                line-height: 140%;
                margin: 1.5rem 0;
                font-size: 1.5rem;
                text-align: start;
                color: ${({ theme }) => theme.COLORS.Light[300]};
            }
        }
    }
`;
