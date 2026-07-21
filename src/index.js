import "./styles/jester-css.css";
import "./styles/reset.css";
import "./styles/styles.css";
import { Home, Menu, Contact } from "./barrel-loader.js";

class UIController {
  constructor() {
    /* initialize button handlers */

    const homeButton = document.querySelector(".nav__button--home");
    const menuButton = document.querySelector(".nav__button--menu");
    const contactButton = document.querySelector(".nav__button--contact");
    const themeButton = document.querySelector(".nav__theme-button");

    homeButton.addEventListener("click", () => {
      this.#pageSwitch("home");
    });
    menuButton.addEventListener("click", () => {
      this.#pageSwitch("menu");
    });
    contactButton.addEventListener("click", () => {
      this.#pageSwitch("contact");
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

  setOldTheme = () => {
    const savedTheme = localStorage.getItem(this.#THEME_STORAGE_NAME);

    if (savedTheme === null) {
      this.#consoleLog(`Saved theme is ${savedTheme}, not switching.`);
    } else {
      this.themeSwitch(savedTheme);
    }
  };

  themeSwitch = (theme = "nada") => {
    const root = document.documentElement;

    switch (theme) {
      case "dark":
        root.setAttribute("data-theme", "dark");
        break;
      case "light":
        root.setAttribute("data-theme", "light");
        break;
      case "nada":
        root.setAttribute(
          "data-theme",
          (() => {
            return root.getAttribute("data-theme") === "light"
              ? "dark"
              : "light";
          })(),
        );
        break;
      default:
        this.#consoleLog(`themeSwitch called with invalid theme ${theme}`);
        return;
    }
    this.#consoleLog(`${root.getAttribute("data-theme")} theme is now set.`);
    this.#saveCurrentTheme();
  };

  /* === private === */
  #THEME_STORAGE_NAME = "theme";
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
      case "contact":
        appendingFunc = Contact;
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

  #saveCurrentTheme = () => {
    const currTheme = document.documentElement.getAttribute("data-theme");

    localStorage.setItem(this.#THEME_STORAGE_NAME, currTheme);
  };
}

function main() {
  const ui = new UIController();
  // ui.setDefaultPage();
  ui.setOldTheme();
}

main();
