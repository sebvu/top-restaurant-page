import { Loader } from "../exporter.js";

export default function homeComponent() {
  const homeElements = Loader.loadElements([
    Loader.newEl("hgroup", {
      classList: ["content__header", "header", "--context-lg"],
      children: [
        Loader.newEl("h1", {
          classList: ["header__text", "_text", "_text--header-font"],
          text: "Pettito's Brunch Café",
        }),
        Loader.newEl("p", {
          classList: ["header__subtext", "_text", "_text--normal-font"],
          text: "The common denominator of all pets alike, food... ",
          children: [Loader.newEl("strong", { text: "FOOD!!! 🫪" })],
        }),
      ],
    }),
    Loader.newEl("hr", { classList: "content__hr" }),
    Loader.newEl("div", {
      classList: ["content__main", "main", "--context-xs"],
      children: [
        /* greet paragraph */
        Loader.newEl("div", {
          classList: "main__container-outer",
          children: [
            Loader.newEl("div", {
              classList: "main__container-inner",
              children: [
                Loader.newEl("p", {
                  classList: ["main__paragraph", "_text", "_text--normal-font"],
                  children: [
                    Loader.newTextNode("Why do "),
                    Loader.newEl("em", { text: "humans" }),
                    Loader.newTextNode(
                      " try to be special and have their own restaurants? How about pets? This is ",
                    ),
                    Loader.newEl("strong", { text: "Pettito's!" }),
                    Loader.newTextNode(" A food place "),
                    Loader.newEl("strong", {
                      children: Loader.newEl("em", { text: "EXCLUSIVELY" }),
                    }),
                    Loader.newTextNode(" for pets. ♥️"),
                  ],
                }),
                Loader.newEl("p", {
                  classList: ["main__paragraph", "_text", "_text--normal-font"],
                  text: "Pamper your pets, make them happy. Come by today! You're free to watch outside. :)",
                }),
              ],
            }),
          ],
        }),
        /* loaction */
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
                  text: "Location",
                }),
                Loader.newEl("ul", {
                  classList: ["main__list", "_text", "_text--normal-font"],
                  children: [
                    Loader.newEl("li", {
                      text: "1234 PARTY STREET, Houston TX, 77004",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* hours */
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
                  text: "Hours",
                }),
                Loader.newEl("ul", {
                  classList: ["main__list", "_text", "_text--normal-font"],
                  children: [
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Monday:" }),
                        Loader.newTextNode(" 6am - 8pm"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Tuesday:" }),
                        Loader.newTextNode(" 6am - 8pm"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Wednesday:" }),
                        Loader.newTextNode(" 6am - 8pm"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Thursday:" }),
                        Loader.newTextNode(" 6am - 8pm"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Friday:" }),
                        Loader.newTextNode(" 6am - 5pm"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Saturday:" }),
                        Loader.newTextNode(" 6am - 5pm"),
                      ],
                    }),
                    Loader.newEl("li", {
                      children: [
                        Loader.newEl("strong", { text: "Sunday:" }),
                        Loader.newTextNode(" Closed"),
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

  return homeElements;
}
