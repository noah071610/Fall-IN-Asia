// CSS
export const BLACK_COLOR = "black" as const;
export const WHITE_COLOR = "white" as const;
export const BLUE_COLOR = "#1187cf" as const;
export const RED_COLOR = "#C02E4C" as const;
export const SKY_COLOR = "#7B9ACC" as const;
export const PINK_COLOR = "#f6d6d6" as const;

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

export const GRID_STYLE = (gap: string, colums: string, row?: string) => `
  display:grid;
  grid-template-columns:${colums};
  grid-template-rows:${row};
  gap:${gap};
`;

//JS

export const goodsPosterSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  vertical: true,
  verticalSwiping: true,
};

export const goodsFilterList = [
  "直接交換",
  "早め",
  "新しい",
  "ユニーク",
  "ポスター",
  "アルバム",
  "ぬいぐるみ",
  "担当じゃない",
  "卒業",
  "サイン",
  "カード",
  "チケット",
];

export const NewsMainPostsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
