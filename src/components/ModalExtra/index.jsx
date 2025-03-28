import { Container } from "./styles";

export function ModalExtra({ yes, no, modalIsOpen, ...rest }) {
    return (
        <Container data-modal-is-open={modalIsOpen}>
            <div className="modal">
                <p>Deseja mesmo sair da aplicação ?</p>
                <div>
                    <button onClick={yes}>Sim</button>
                    <button onClick={no}>Cancelar</button>
                </div>
            </div>
        </Container>
    );
}
