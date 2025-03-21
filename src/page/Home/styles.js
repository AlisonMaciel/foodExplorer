import {keyframes, styled} from "styled-components"
import { BREAK_POINTS } from "../../styles/breakPoints"

const homeAnimation = keyframes`
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
    max-width: 31.25rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: ${({theme}) => theme.COLORS.Dark[400]};
    animation: ${homeAnimation} 700ms ease-in-out;

    @media (min-width: ${BREAK_POINTS.MD}) {
        max-width: 100%;
    }
    
    >main {
        margin: 0 1.5rem;
        flex-grow: 1;
        @media (min-width: ${BREAK_POINTS.XL}) {
            max-width: 70.12rem;
            margin: 0 auto;
        }
    }
    
    .Unmatched-flavors {
        display: flex;
        align-items: center;
        max-width: 24rem;
        margin: 44px auto;
        background: linear-gradient(to bottom, #091E26, #00131C);
        
        img {
            width: 11.83rem;
            margin-left: -22px;
        }
        
        span {
            font-weight: 600;
            font-size: 1.12rem;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.Light[300]};
            display: block;
        }
        
        strong {
            font-style: normal;
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.Light[300]};
            margin-top: 3px;
        }
        
        @media (min-width: ${BREAK_POINTS.MD}) {
            max-width: 50rem;

            img {
            width: 25.83rem;
            margin-left: -42px;
            margin-top: -20px;
            }

            span {
                font-weight: 300;
                font-size: 1.9rem;
            }

            strong {
                font-size: 0.88rem;
                font-weight: 300;
                line-height: 100%;
            }

        }

        @media (min-width: ${BREAK_POINTS.XL}) {
            margin-top: 164px;
            max-width: 70rem;
            height: 16.25rem;
            
            img {
                height: 399px;
                width: 39.5rem;
                margin-bottom: 120px;
                margin-left: -55px;
            }

            span {
                font-weight: 300;
                font-size: 2.5rem;
            }

            strong {
                font-size: 0.83rem;
                font-weight: 400;
                line-height: 100%;
            }
            
        }
        
    }
    
    .Unmatched-flavors:hover {
        filter: brightness(0.9);
    }
    
    .meals, .drinks, .desserts {
        position: relative;
        font-weight: 500;
        font-size: 1.12rem;
        line-height: 140%;
        color:  ${({theme}) => theme.COLORS.Dark[400]};
        animation: ${homeAnimation} 1.3s ease-in-out;
        
        h2 {
            font-weight: 600;
            font-size: 1.12rem;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.Light[300]};
            margin-bottom: 1.5rem;
        }
        
        .left {
            font-size: 1.68rem;
            position: absolute;
            top: 50%;
            cursor: pointer;
        }
        
        .right {
            font-size: 1.68rem;
            position: absolute;
            top: 50%;
            right: 0;
            cursor: pointer;
        }
        
        @media (min-width: ${BREAK_POINTS.MD}) {
            max-width: 70.12rem;

            h2 {
                font-weight: 500;
                font-size: 2rem;

            }

            .left, .right {
                font-size: 2.5rem;
            }
        }
    }

    .desserts {
        margin: 1.5rem 0;
    }
    
    .card-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        overflow-x: hidden;
        white-space: nowrap;
        scroll-behavior: smooth;

        @media (min-width: ${BREAK_POINTS.XL}) {
            max-width: 70.12rem;
        }
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;
        color: ${({theme}) => theme.COLORS.Light[200]};
        background-color: ${({theme}) => theme.COLORS.Dark[600]};
        height: 77px;
        margin-top: 1.5rem;
        padding: 0 1rem;
        @media (min-width: ${BREAK_POINTS.MD}) {
            max-width: 100%;
        }
    }
` 

