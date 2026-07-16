import "./styles/jester-css.css";
import "./styles/reset.css";
import "./styles/styles.css";
import { Home, Menu, About } from "./components/barrel-loader.js";

class UIController {
  constructor() {
    /* initialize button handlers */

    const homeButton = document.querySelector(".nav__button--home");
    const menuButton = document.querySelector(".nav__button--menu");
    const aboutButton = document.querySelector(".nav__button--about");
    const themeButton = document.querySelector(".nav__theme-button");

    homeButton.addEventListener("click", () => {
      this.#pageSwitch("home");
    });
    menuButton.addEventListener("click", () => {
      this.#pageSwitch("menu");
    });
    aboutButton.addEventListener("click", () => {
      this.#pageSwitch("about");
    });
    themeButton.addEventListener("click", () => {
      this.themeSwitch();
    });
  }

  /* === public === */

  setDefaultPage = () => {
    this.#consoleLog("Setting default page.");
    this.#pageSwitch("home");
  };

  themeSwitch = (theme = "null") => {
    const root = document.documentElement;

    switch (theme) {
      case "dark":
        root.setAttribute("data-theme", "dark");
        break;
      case "light":
        root.setAttribute("data-theme", "light");
        break;
      case "null":
        const currTheme = root.getAttribute("data-theme");
        root.setAttribute(
          "data-theme",
          (() => {
            return currTheme === "light" ? "dark" : "light";
          })(),
        );
        return;
      default:
        this.#consoleLog(`themeSwitch called with invalid theme ${theme}`);
        return;
    }
    this.#consoleLog(`${root.getAttribute("data-theme")} theme is now set.`);
  };

  /* === private === */
  #currentPage = null;

  #consoleLog = (msg) => {
    console.log(`[UIController] ${msg}`);
  };

  #throwErrorLog = (msg) => {
    throw Error(`[UIController] ${msg}`);
  };

  #pageSwitch = (where) => {
    const content = document.querySelector("#content");
    let appendingFunc = null;

    switch (where.toLowerCase()) {
      case "home":
        appendingFunc = Home;
        break;
      case "menu":
        appendingFunc = Menu;
        break;
      case "about":
        appendingFunc = About;
        break;
      default:
        this.#consoleLog(`Page switch not found for: ${where}`);
        return;
    }

    if (appendingFunc === null) {
      this.#throwErrorLog(
        `Appending func resulted in null value for: ${where}`,
      );
    } else if (this.#currentPage === where) {
      this.#consoleLog("Page is already set! No action.");
    } else {
      this.#currentPage = where;
      this.#consoleLog(`Switching to ${where}`);
      this.#clearContent();
      content.appendChild(appendingFunc());
    }
  };

  #clearContent = () => {
    const contentChildren = document.querySelector("#content");

    while (contentChildren.children.length > 0) {
      contentChildren.firstChild.remove();
    }
  };
}

function main() {
  const ui = new UIController();
  ui.setDefaultPage();
}

main();
