import { Loader } from "../exporter.js";

export default function menuComponent() {
  const menuElements = Loader.loadElements([
    Loader.newEl("hgroup", {
      classList: ["content__header", "header", "--context-md"],
      children: [
        Loader.newEl("h1", {
          classList: ["header__text", "_text", "_text--header-font"],
          text: "Pettito's Supper Paradise",
        }),
        Loader.newEl("p", {
          classList: ["header__subtext", "_text", "_text--normal-font"],
          text: "The common denominator of all pets alike, food... ",
          children: [Loader.newEl("strong", { text: "FOOD!!! 🫪" })],
        }),
      ],
    }),
  ]);

  return menuElements;
}
