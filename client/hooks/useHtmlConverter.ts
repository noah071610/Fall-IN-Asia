import { useMemo } from "react";

export default function useHtmlConverter(content?: string): string {
  return content?.replace(/(<([^>]+)>)/gi, "").replace(/&.*;/gi, "") || "";
}
