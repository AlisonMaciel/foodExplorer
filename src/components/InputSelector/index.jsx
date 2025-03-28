import { Container } from "./styles.js";

export function InputSelector({ title, options = [], ...rest }) {
    return (
        <Container {...rest}>
            <span>{title}</span>

            <div>
                <select placeholder="Selecionar">
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </Container>
    );
}
