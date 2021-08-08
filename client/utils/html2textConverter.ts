export default function html2textConverter(content?: string): string {
  return content?.replace(/(<([^>]+)>)/gi, "").replaceAll(/&nbsp;|&amp;/gi, "") || "";
}
