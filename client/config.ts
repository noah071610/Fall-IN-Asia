import axios from "axios";
import { toast } from "react-toastify";

// CSS
export const BLACK_COLOR = "black" as const;
export const WHITE_COLOR = "white" as const;
export const BLUE_COLOR = "#1187cf" as const;
export const RED_COLOR = "#C02E4C" as const;
export const SKY_COLOR = "#7B9ACC" as const;
export const GRAY_COLOR = "#f6f6f9" as const;
export const DEEP_BLUE_COLOR = "#5A66D7" as const;
export const PINK_COLOR = "#f6d6d6" as const;

export const SM_SIZE = "576px" as const;
export const MD_SIZE = "768px" as const;
export const LG_SIZE = "992px" as const;
export const XLG_SIZE = "1200px" as const;

export const DEFAULT_ICON_URL =
  "https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png" as const;

export const NO_IMAGE_URL =
  "https://usagi-post.com/wp-content/uploads/2020/05/no-image-found-360x250-1.png" as const;

export const NO_POST_URL =
  "https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png" as const;

export const RGB_BLACK = (opacity: number) => `
  rgba(0,0,0,${opacity})
`;

export const CENTER_POSITION = () => `
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  z-index:10;
`;

export const BORDER_THIN = (border: string, px?: number) => `
  ${border}:${px ? px : "1"}px solid rgba(0,0,0,0.15)
`;

export const FONT_STYLE = (size: number, weight?: boolean, color?: string) => `
font-size:${size}rem;
font-weight:${weight && "bold"};
color:${color ? color : "black"};
`;

export const FLEX_STYLE = (justify: string, align: string, flexStyle?: string) => `
  display:flex;
  justify-content:${justify};
  align-items:${align};
  flex-direction:${flexStyle};
`;

export const WHITE_STYLE = (border?: boolean, width?: string, radius?: number) => `
border:${border && "1px solid rgba(0,0,0,0.15)"};
width:${width ? width : "100%"};
background: ${WHITE_COLOR};
border-radius: ${radius ? radius : "15"}px;
`;

export const HOVER_GRAY = () => `
  cursor:pointer;
  &:hover{
    background:${GRAY_COLOR};
  }
`;

export const GRID_STYLE = (gap: string, colums: string, row?: string) => `
  display:grid;
  grid-template-columns:${colums};
  grid-template-rows:${row};
  gap:${gap};
`;

// list

export const japanMapList = [
  { name: "関東(東京)", eng: "kanto" },
  { name: "関西(大阪)", eng: "kansai" },
  { name: "九州", eng: "kyushu" },
  { name: "東北", eng: "tohoku" },
  { name: "中部", eng: "chubu" },
  { name: "中国", eng: "chugoku" },
  { name: "四国", eng: "shikoku" },
  { name: "北海道", eng: "hotkaido" },
  { name: "沖縄", eng: "okinawa" },
  { name: "大韓民国", eng: "korea" },
];

// Toast Message

export const toastErrorMessage = (error: any) => {
  let message = error;
  if (typeof error !== "string") {
    message = error.response?.data?.data?.message;
  }
  toast.error(message, {
    position: "top-center",
    autoClose: 2300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast",
  });
};

export const toastSuccessMessage = (message: string) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast",
  });
};

// error handler

export const handleImgError = (e: React.SyntheticEvent) => {
  (e.target as HTMLImageElement).src = NO_IMAGE_URL;
};

// React quill

export const imageHandler = (quillInstance: any, isStory?: boolean) => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();
  input.onchange = async (e) => {
    const file: File | null = input.files ? input.files[0] : null;
    const form = new FormData();
    if (file) {
      form.append("image", file);
    }
    axios({
      method: "post",
      url: isStory ? "/story/image" : "/mainPost/image",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      const range = quillInstance?.current?.getSelection(true);
      quillInstance?.current?.insertEmbed(range.index, "image", `${res.data.data}`);
      quillInstance?.current?.setSelection(range.index + 1);
    });
  };
};

export const quillModules = (isNoImageModule: boolean) => {
  return {
    toolbar: {
      container: [
        [{ size: ["small", "normal", "large", "huge"] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", isNoImageModule ? "" : "image"],
        [{ align: [] }, { color: [] }, { background: [] }],
      ],
    },
  };
};

export const quillSetting = (isNoImageModule: boolean) => {
  return {
    theme: "snow",
    placeholder: "내용을 작성해주세요.",
    modules: quillModules(isNoImageModule),
  };
};

export const qullFormats = [
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "color",
  "background",
];

// swr

export const noRevalidate = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};
