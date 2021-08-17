export default function html2textConverter(content?: string): string {
  return content?.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;|&amp;/gi, "") || "";
}
