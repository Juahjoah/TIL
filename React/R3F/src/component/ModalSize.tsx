import ReactModal from "react-modal";

interface ModalSizeProps {
  modalOpen: boolean;
  onClose: () => void;
  size: "small" | "medium" | "large"; // 모달 크기 선택
  title: string;
  subtitle?: string;
  buttonLabel: string;
  children: React.ReactNode;
}

export default function ModalSize({
  modalOpen,
  onClose,
  size,
  title,
  subtitle,
  buttonLabel,
  children,
}: ModalSizeProps) {
  const modalStyles = {
    content: {
      width: "auto",
      maxWidth:
        size === "small" ? "300px" : size === "medium" ? "500px" : "800px", // 각 크기에 따른 maxWidth 조정
      margin: "auto",
    },
  };

  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={false}
      style={modalStyles}
    >
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        {children}
        <button onClick={onClose}>{buttonLabel}</button>
      </div>
    </ReactModal>
  );
}

{
  /* <ModalSize
  modalOpen={modalOpen}
  onClose={closeModal}
  size="small"
  title="작은 모달"
  buttonLabel="확인"
>
  모달 내용
</ModalSize> */
}
