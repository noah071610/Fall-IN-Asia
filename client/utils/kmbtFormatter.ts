const number_formatter = (unit: string, abs_views: number) => {
  let measure_unit = 0;
  switch (unit) {
    case "k":
      measure_unit = 10 ** 3;
      break;
    case "m":
      measure_unit = 10 ** (3 * 2);
      break;
    case "b":
      measure_unit = 10 ** (3 * 3);
      break;
    case "t":
      measure_unit = 10 ** (3 * 4);
      break;
    default:
      return;
  }
  const views_split = String(abs_views / measure_unit).split(".");
  if (views_split.length === 1) {
    return views_split[0] + unit;
  } else {
    const decimal = views_split[1].slice(0, 1);
    if (decimal === "0") {
      return views_split[0] + unit;
    } else {
      return views_split[0] + "." + decimal + unit;
    }
  }
};

export function kmtb_Formatter(views: number) {
  if (!views) {
    return 0;
  }
  let abs_views = Math.abs(views);
  if (abs_views < 999) {
    return abs_views;
  }
  if (999 <= abs_views && abs_views <= 999999) {
    return number_formatter("k", abs_views);
  }
  if (999999 < abs_views && abs_views <= 999999999) {
    return number_formatter("m", abs_views);
  }
  if (999999999 < abs_views && abs_views <= 999999999999) {
    return number_formatter("b", abs_views);
  }
  if (999999999999 < abs_views) {
    return number_formatter("t", abs_views);
  }
}
