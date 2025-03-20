import {styled} from "styled-components"
import { BREAK_POINTS } from "../../styles/breakPoints"

export const Container = styled.div`
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.Light[600]};
    border: ${({theme, isNew}) => isNew ? "2px dashed #7c7c8a" : "none"};
    border-radius: 8px;
    padding: 4px 10px;

    >input {
        width: 4.75rem;
        background: transparent;
        border: none;
        outline: none;
        font-weight: 400;
        font-size: 1rem;
        line-height: 100%;
        color: ${({theme, isNew}) => isNew ? theme.COLORS.Light[500] : theme.COLORS.Light[100]};
    }

    .button-add {
        border: none;
        background-color: transparent;
        color: ${({theme}) => theme.COLORS.Light[500]};
    }

    .button-remove {
        border: none;
        background-color: transparent;
        color: ${({theme}) => theme.COLORS.Light[100]};
    }

`

