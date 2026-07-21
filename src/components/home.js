import { Loader } from "../exporter.js";

export default function homeComponent() {
  const text = document.createElement("p");

  text.textContent = "i'm HOMEEE";

  return text;
}
