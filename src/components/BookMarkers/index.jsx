import { Container } from "./styles.js";

import { FiX, FiPlus } from "react-icons/fi";

export function BookMarkers({ isNew, onClick, value, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />
            <button
                onClick={onClick}
                className={isNew ? "button-add" : "button-remove"}
                {...rest}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}
