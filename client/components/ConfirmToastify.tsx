import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const toastConfirmMessage = (
  onClickConfirm: () => void,
  message: string,
  yes: string,
  no: string
) => {
  toast(<ConfirmToastForm onClickConfirm={onClickConfirm} message={message} yes={yes} no={no} />, {
    position: "top-center",
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const ConfirmToastForm = ({
  onClickConfirm,
  closeToast,
  message,
  yes,
  no,
}: {
  onClickConfirm: () => void;
  closeToast?: any;
  message: string;
  yes: string;
  no: string;
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
        {yes}
      </button>
      <button onClick={closeToast}>{no}</button>
    </div>
  </div>
);
