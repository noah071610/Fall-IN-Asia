import { useMemo } from "react";

export default function useHtmlConverter(content?: string): string {
  return (
    content
      ?.replaceAll("<br>", "\n")
      .replace(/(<([^>]+)>)/gi, "")
      .replace(/&.*;/gi, "") || ""
  );
}
