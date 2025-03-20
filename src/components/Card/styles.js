import {styled} from "styled-components"

import {BREAK_POINTS} from "../../styles/breakPoints"

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 13.12rem;
    max-width: 13.12rem;
    min-width: 13.12rem;
    height: 18.25rem;
    gap: 12px;
    padding: 1.5rem;
    box-sizing: border-box;
    border: 1px solid ${({theme}) => theme.COLORS.Dark[200]};
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.COLORS.Dark[200]};
    cursor: pointer;

    >img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
    }

    .img-card {
        margin-top: 3rem;
    }
    
    >span {
        font-weight: 500;
        font-size: 0.87rem;
        line-height: 1.5rem;
        color: ${({theme}) => theme.COLORS.Light[300]};
    }

    >p {
        display: none;
        max-width: 100%;
        text-align: center;
        white-space: normal;
    }
    
    >strong {
        font-weight: 400;
        font-size: 1rem;
        line-height: 100%;
        color: ${({theme}) => theme.COLORS.Tints.Cake[200]};
    }

    .card-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.87rem;
    }
    
    .add-remove {
        display: flex;
        align-items: center;
        gap:0.87rem;
        font-weight: 400;
        font-size: 1rem;
        line-height: 100%;
        color: ${({theme}) => theme.COLORS.Light[300]};
        
        svg {
            font-size: 1.12rem;
            color: ${({theme}) => theme.COLORS.Light[100]};
            cursor: pointer;
        }
    }
    .button_card {
        width: 10.12rem;
        padding: 5px;
    }
    
    .heart {
        position: absolute;
        right: 14px;
        top: 10px;
        width: 1.5rem;
        height: 1.37rem;
        cursor: pointer;
        
        &[data-heart-red="true"] {
            color: ${({theme}) => theme.COLORS.Tints.Tomato[400]}; 
        }
    }
    
    .pencil {
        position: absolute;
        right: 14px;
        top: 10px;
        width: 1.5rem;
        height: 1.37rem;
        cursor: pointer;
    }
    
    .pencil:hover {
        width: 1.6rem;
        height: 1.47rem;
        filter: brightness(0.9);
    }
    
    .heart:hover {
        width: 1.6rem;
        height: 1.47rem;
        filter: brightness(0.9);
    }

    .card-desktop {
        display: none;
    }
    
    @media (min-width: ${BREAK_POINTS.MD}) {
        width: 16rem;
        max-width: 16rem;
        min-width: 16rem;
        height: 28.87rem;
        overflow: hidden;
        
    >img {
        width: 11rem;
        height: 11rem;
    }

    .img-card {
        margin-top: 3.43rem;
    }

    >span {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.Light[300]};
    }
    
    >p {
        display: block;
        font-weight: 400;
        font-size: 0.87rem;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.Light[400]};  
    }
    
    >strong {
        font-size: 1.5rem;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.Tints.Cake[200]};
    }

    .card-mobile {
        display: none;
    }

    .card-desktop {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .button_card {
        width: 5.75rem;
        padding: 12px 1.5rem;
    }

    .add-remove {
        font-size: 1.5rem;
        gap: 1rem;
        
        svg {
            font-size: 1.5rem;
        }
    }

    .pencil, .heart {
        height: 2rem;
    }

    @media (min-width: ${BREAK_POINTS.XL}) {
        width: 19rem;
        max-width: 19rem;
        min-width: 19rem;

        >span {
            font-size: 1.5rem;
        }

        >strong {
            font-size: 2rem;
        }
    }
}

`