import {Container} from "./styles.js"

import foodExplorerFooter from "../../assets/Group 5946.svg"

export function Footer() {
    return (
        <Container>
            <div>
                <img
                    src={foodExplorerFooter}
                    alt="foodExplorer"
                />
                
                <p>
                    © 2025 - Todos os direitos reservados.
                </p>
            </div>
        </Container>
    )
}