import { Container } from "./styles.js";

export function TextArea({ description, ...rest }) {
    return <Container {...rest}>{description}</Container>;
}
