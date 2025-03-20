import {styled} from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  .modal {
    background: #E6E6FA;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 25.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;

    p {
      font-size: 1.5rem;
      font-weight: 400;
    }

    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 6px;
      background: linear-gradient(90deg, #4caf50,rgba(255, 235, 59, 0.8),rgba(143, 54, 244, 0.95));
      width: 100%;
    }

    .animate {
      animation: progress-animation 3s linear forwards;
    }
  }

  @keyframes progress-animation {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }

  &[data-is-modal-open="true"] {
    visibility: visible;
    opacity: 1;
  }
`;
