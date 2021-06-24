import { FC, VFC } from "react";

// CSS
export const BLACK_COLOR = "black" as const;
export const WHITE_COLOR = "white" as const;
export const BLUE_COLOR = "#1187cf" as const;

export const SM_SIZE = "576px" as const;
export const MD_SIZE = "768px" as const;
export const LG_SIZE = "992px" as const;
export const XLG_SIZE = "1200px" as const;

export const RGB_BLACK = (opacity: string) => `
  rgba(0,0,0,${opacity})
`;

export const FLEX_STYLE = (justify: string, align: string) => `
  display:flex;
  justify-content:${justify};
  align-items:${align};
`;
