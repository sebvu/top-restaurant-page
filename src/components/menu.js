import { Loader } from "../exporter.js";
import MenuItemImg from "../assets/images/no-humans-allowed.png";

export default function menuComponent() {
  const menuElements = Loader.loadElements([
    Loader.newEl("hgroup", {
      classList: ["content__header", "header", "--context-lg"],
      children: [
        Loader.newEl("h1", {
          classList: ["header__text", "_text", "_text--header-font"],
          text: "Pettito's Menu",
        }),
        Loader.newEl("p", {
          classList: ["header__subtext", "_text", "_text--normal-font"],
          children: [
            Loader.newEl("strong", { text: "NOTE:" }),
            Loader.newTextNode(
              " If you are a human, you will see Jester instead. He is nice.",
            ),
          ],
        }),
      ],
    }),
    Loader.newEl("hr", { classList: "content__hr" }),
    Loader.newEl("div", {
      classList: ["content__main", "main", "--context-xs"],
      children: [
        Loader.newEl("div", {
          classList: "main__container-outer",
          children: [
            Loader.newEl("div", {
              classList: "main__container-inner",
              children: [
                Loader.newEl("h2", {
                  classList: [
                    "main__container-header",
                    "_text",
                    "_text--header-font",
                  ],
                  text: "The Golden Bone",
                }),
                Loader.newEl("div", {
                  classList: "main__image-container",
                  children: [
                    Loader.newEl("img", {
                      attrsList: {
                        src: MenuItemImg,
                        alt: "Monster stop sign that says 'NO HUMANS ALLOWED' with caption 'REPORT PROBLEMS TO 1-866-666-6001'",
                      },
                      classList: "main__image",
                    }),
                  ],
                }),
                Loader.newEl("p", {
                  classList: ["main__paragraph", "_text", "_text--normal-font"],
                  text: "IT IS SCRUMPIOUSLY GOOD I LOVE IT SO MUCH EVERYTHING ABOUT THE GOLDEN BONE IS AMAZING PLEASE GIVE ME MORE OF THE GOLDEN BONE NO HUMANS ARE ALLOWED TO SEE THE GOLDEN BONE PLEASE SEE YOUR WAY OUT AS SOON AS POSSIBLE",
                }),
                Loader.newEl("ul", {
                  classList: ["main__list", "_text", "_text--normal-font"],
                  children: [
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Ingredient: " }),
                        Loader.newTextNode("ASDFKLJSAEFKLJASEIFJSIDJFLIES"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Seasoning: " }),
                        Loader.newTextNode(`Raw Eggs & Cinnamon`),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ]);

  return menuElements;
}
