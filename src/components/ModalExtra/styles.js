import {keyframes, styled} from "styled-components"

const modalAnimation = keyframes`
  from {
    background:rgb(217, 217, 237);
  }

  to {
    background:rgb(215, 215, 242);
  }
`

const container = keyframes`
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: transparent;
  opacity: 0;
  display: none;
  animation: ${container} 500ms ease-in-out;
  pointer-events: none;

  .modal {
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding: 8px;
    background:rgb(217, 217, 237);
    border-radius: 8px;
    max-width: 20rem;
    font-size: 1rem;
    font-weight: 400;

    div {
      display: flex;
      gap: 8px;
      justify-content: end;

      button {
        border: none;
        background-color: transparent;
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  .modal:hover {
    animation: ${modalAnimation} 500ms ease-in-out;
    
  }

  &[data-modal-is-open="true"] {
    display: block;
    opacity: 1;
    pointer-events: auto;
  }
`