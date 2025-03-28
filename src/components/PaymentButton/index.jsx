import { Container } from "./styles.js";

export function PaymenBtutton({ title, icon: Icon, ...rest }) {
    return (
        <Container {...rest}>
            {Icon && <Icon size={24} />}
            {title}
        </Container>
    );
}
