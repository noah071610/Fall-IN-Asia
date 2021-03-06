import { DataResponse } from "@typings/db";
import axios from "axios";
import { toast } from "react-toastify";
import { i18n } from "next-i18next";
import { getUserInfoAction } from "actions/user";

// CSS
export const BLACK_COLOR = "black" as const;
export const WHITE_COLOR = "white" as const;
export const BLUE_COLOR = "#1187cf" as const;
export const RED_COLOR = "#C02E4C" as const;
export const GRAY_COLOR = "rgba(243, 244, 246)" as const;

export const SM_SIZE = "576px" as const;
export const MD_SIZE = "768px" as const;
export const LG_SIZE = "1024px" as const;
export const XLG_SIZE = "1280px" as const;

export const FALL_IN_ASIA_LOGO =
  "https://user-images.githubusercontent.com/74864925/130511602-0ad46bd4-2ffb-41db-8ca6-9b07971a1a9d.png" as const;

export const WORLD_IMAGE =
  "https://images.unsplash.com/photo-1519354754184-e1d9c46182c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" as const;

export const DEFAULT_ICON_URL =
  "https://user-images.githubusercontent.com/74864925/130333727-e625b505-a619-4e2d-844c-2bcd1cf9e47d.jpg" as const;

export const FALL_IN_ASIA_ICON =
  "https://user-images.githubusercontent.com/74864925/130333618-09441992-2977-423c-889d-e2b81d83833a.jpg" as const;

export const NO_IMAGE_URL =
  "https://usagi-post.com/wp-content/uploads/2020/05/no-image-found-360x250-1.png" as const;

export const NO_POST_URL =
  "https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png" as const;

export const RGB_BLACK = (opacity: number) => `
  rgba(0,0,0,${opacity})
`;

// next config

export const getUserCookieWithServerSide = async (req: any, store: any) => {
  const cookie = req ? req.headers.cookie : "";
  if (axios.defaults.headers) {
    axios.defaults.headers.Cookie = "";
    if (req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
  }
  await store.dispatch(getUserInfoAction());
};

export const BORDER_THIN = (border: string, px?: number) => `
  ${border}:${px ? px : "1"}px solid rgba(0,0,0,0.15)
`;

export const FLEX_STYLE = (justify: string, align: string, flexStyle?: string) => `
  display:flex;
  justify-content:${justify};
  align-items:${align};
  flex-direction:${flexStyle};
`;

export const ELLIPSIS_STYLE = (lineHeight: number, clamp: number, height: string) => `
line-height: ${lineHeight};
-webkit-line-clamp: ${clamp};
height: ${height};
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
word-wrap: break-word;
text-overflow: ellipsis;

`;

export const GRID_STYLE = (gap: string, colums: string, row?: string) => `
  display:grid;
  grid-template-columns:${colums};
  grid-template-rows:${row};
  gap:${gap};
`;

// list

// We will update this list from popular searched word of entity Database-Indexing  (2021/08/01 JANG HYUN SOO)
// ??? auto complete ??????????????? ????????? DB content ???????????? ?????? ?????????????????? ??????????????????. ????????? ????????? ???????????? (?????????)
export const searchOptions = [
  "??????",
  "??????",
  "?????????",
  "????????? ??????",
  "????????????",
  "?????????",
  "??????",
  "?????? ?????????",
  "??????",
  "??????",
  "??????????????????",
  "?????????",
  "??????",
  "??????",
  "??????",
  "??????",
  "?????????",
  "?????? ??????",
  "???????????????",
  "???????????????",
  "?????????",
  "??????????????????",
  "??????",
  "??????",
  "??????????????? ????????? ??????",
  "?????? ??????",
  "??????",
  "????????? ??????",
  "????????? ??????",
  "?????????",
  "?????????",
  "??????",
  "?????? ???????????????",
  "?????? ??????",
  "?????????",
  "????????????",
  "?????????",
  "????????????",
  "???????????? ?????????",
  "??????",
  "????????????",
  "?????? ??????",
  "?????? ??????",
  "?????? ??????",
  "??????????????? ??????",
  "??????",
  "?????? ??????",
  "?????????",
]
  .sort()
  .map((v) => {
    return { value: v };
  });

// Toast Message

export const toastErrorMessage = (error: any) => {
  let errorMessage = error;
  if (typeof error !== "string") {
    if (errorMessage.message) {
      errorMessage = i18n?.t(error.response?.data?.data.message);
    } else {
      errorMessage = i18n?.t(error.response?.data?.data);
    }
  }
  toast.error(errorMessage, {
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
      url: isStory ? "/story/image" : "/moment/image",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res: DataResponse) => {
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
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", isNoImageModule ? "" : "image"],
        [{ align: [] }, { color: [] }, { background: [] }],
      ],
    },
  };
};

export const quillMomentModules = () => {
  return {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", "image"],
        [{ align: [] }, { color: [] }, { background: [] }],
      ],
    },
  };
};

export const quillSetting = (isNoImageModule: boolean) => {
  return {
    theme: "snow",
    placeholder: "Write content here.",
    modules: quillModules(isNoImageModule),
  };
};

export const qullFormats = [
  "header",
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
