import ReactModal from "react-modal";

interface ModalProps {
  modalOpen: boolean;
}

export default function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={false}
    >
      /*Modal창에 담을 컴포넌트 구성하기*/
    </ReactModal>
  );
}
