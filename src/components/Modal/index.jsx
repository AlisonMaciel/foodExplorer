import { useEffect, useRef } from "react";
import { Container } from "./styles";

export function Modal({ onOpenModal, description, onClosedModal }) {
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (!onOpenModal) return;

    const progressBar = progressBarRef.current
    progressBar.classList.remove("animate")
    void progressBar.offsetWidth
    progressBar.classList.add("animate")

    const timeout = setTimeout(() => {
      onClosedModal()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [onOpenModal])

  return (
    <Container data-is-modal-open={onOpenModal}>
      <div className="modal">
        <p>{description}</p>
        <div ref={progressBarRef} className="progress-bar animate"></div>
      </div>
    </Container>
  );
}
