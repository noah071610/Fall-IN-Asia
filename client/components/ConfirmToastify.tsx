import { toast } from "react-toastify";

const ConfirmToastForm = ({
  onClickConfirm,
  closeToast,
  title,
}: {
  onClickConfirm: () => void;
  closeToast?: any;
  title?: string;
}) => (
  <div style={{ cursor: "default" }}>
    <h4 style={{ marginLeft: "0.3rem" }}>정말 {title} 삭제하시겠어요?</h4>
    <div className="cofirm-btn-wrapper">
      <button
        onClick={() => {
          onClickConfirm();
          closeToast();
        }}
      >
        네 삭제할게요
      </button>
      <button onClick={closeToast}>아니요</button>
    </div>
  </div>
);
export const toastDeleteConfirmMessage = (onClickConfirm: () => void, title?: string) => {
  toast(<ConfirmToastForm onClickConfirm={onClickConfirm} title={title} />, {
    position: "top-center",
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
