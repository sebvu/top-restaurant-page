import { Loader } from "../exporter.js";

export default function contactComponent() {
  const contactElements = Loader.loadElements([
    Loader.newEl("hgroup", {
      classList: ["content__header", "header", "--context-lg"],
      children: [
        Loader.newEl("h1", {
          classList: ["header__text", "_text", "_text--header-font"],
          text: "Pettito's Contact",
        }),
        Loader.newEl("p", {
          classList: ["header__subtext", "_text", "_text--normal-font"],
          text: "Please refer to contacts below for official inquiries.",
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
                  text: "'Human?!' Cristal ✨👧🇵🇷",
                }),
                Loader.newEl("ul", {
                  classList: ["main__list", "_text", "_text--normal-font"],
                  children: [
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Role:" }),
                        Loader.newTextNode(" Head of House"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Number:" }),
                        Loader.newTextNode(" (866)-123-1236"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Email:" }),
                        Loader.newTextNode(" prettiestgirlever@pettitio.org"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

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
                  text: "'Old Ass' Maya 🪖🐶",
                }),
                Loader.newEl("ul", {
                  classList: ["main__list", "_text", "_text--normal-font"],
                  children: [
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Role:" }),
                        Loader.newTextNode(" Manager"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Number:" }),
                        Loader.newTextNode(" (866)-123-1235"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Email:" }),
                        Loader.newTextNode(" mayawantsretirement@pettitio.org"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

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
                  text: "'Boysss' Patuñia 🐺😽🐺",
                }),
                Loader.newEl("ul", {
                  classList: ["main__list", "_text", "_text--normal-font"],
                  children: [
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Role:" }),
                        Loader.newTextNode(" Catering Services"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Number:" }),
                        Loader.newTextNode(" (866)-123-1234"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Email:" }),
                        Loader.newTextNode(" patuniaforwolves@pettitio.org"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

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
                  text: "Jester",
                }),
                Loader.newEl("ul", {
                  classList: ["main__list", "_text", "_text--normal-font"],
                  children: [
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Role:" }),
                        Loader.newTextNode(" Janitor"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Number:" }),
                        Loader.newTextNode(" (866)-666-6001"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Email:" }),
                        Loader.newTextNode(" janitor@pettitio.org"),
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

  return contactElements;
}
