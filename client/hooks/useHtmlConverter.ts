import { useMemo } from "react";

export default function useHtmlConverter(content?: string): string {
  return content?.replace(/(<([^>]+)>)/gi, "").replaceAll(/&nbsp;|&amp;/gi, "") || "";
}
