import { toast } from "react-toastify";

const ConfirmToastForm = ({
  onClickConfirm,
  closeToast,
  message,
  type,
}: {
  onClickConfirm: () => void;
  closeToast?: any;
  message: string;
  type: string;
}) => (
  <div style={{ cursor: "default" }}>
    <h4 style={{ marginLeft: "0.3rem" }}>{message}</h4>
    <div className="confirm-btn-wrapper">
      <button
        onClick={() => {
          onClickConfirm();
          closeToast();
        }}
      >
        네 {type}
      </button>
      <button onClick={closeToast}>아니요</button>
    </div>
  </div>
);
export const toastConfirmMessage = (onClickConfirm: () => void, message: string, type: string) => {
  toast(<ConfirmToastForm onClickConfirm={onClickConfirm} message={message} type={type} />, {
    position: "top-center",
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
