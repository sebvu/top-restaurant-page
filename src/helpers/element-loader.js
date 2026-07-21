/* helper class to create DOMs easily with JS */
export default new (class ElementLoader {
  constructor() {}

  /* === private === */

  #consoleLog = (msg) => {
    console.log(`[ElementLoader] ${msg}`);
  };

  #throwErrorLog = (msg) => {
    throw Error(`[ElementLoader] ${msg}`);
  };

  /* === public === */

  el = (
    elementType,
    { id = null, classListArr = null, initNS = false } = {},
    childrenListArr = [],
  ) => {
    return {
      elementType,
      opts: { id, classListArr, initNS },
      childrenListArr,
      IS: "el",
    };
  };

  textNode = (msg) => {
    return {
      msg: msg,
      IS: "textNode",
    };
  };

  createElements = (elListArr) => {
    /* DFS creation of all elements */
    let topEl = [];

    const DFSElements = (n, pEl, TOP_EL = true) => {
      if (n === null) {
        return null;
      }
      /* construct element */
      if (n.IS === "textNode") {
        if (TOP_EL) {
          this.#throwErrorLog(
            "Text node attempted to be inserted while TOP_EL was true.",
          );
        } else {
          pEl.appendChild(document.createTextNode(n.msg));
        }
      } else {
        const nEl = (() => {
          if (n.opts.initNS === true) {
            /* default to svg cause that's my only usage tbh */
            return document.createElementNS(
              "http://www.w3.org/2000/svg",
              n.elementType,
            );
          } else {
            return document.createElement(n.elementType);
          }
        })();
        /* setting options */
        if (n.opts.id !== null) {
          nEl.setAttribute("id", n.opts.id);
        }
        if (n.opts.classListArr !== null) {
          nEl.classList.add(...[n.opts.classListArr]);
        }

        /* set element on dom */
        if (TOP_EL) {
          topEl.push(nEl);
        } else {
          pEl.appendChild(nEl);
        }

        /* go to children */

        for (const c of n.childrenListArr) {
          DFSElements(c, nEl, false);
        }
      }
    };

    /* ensure the top element is a single node */
    const rootNode = this.el("div", {}, elListArr);
    DFSElements(rootNode);

    const elNodes = [...topEl[0].childNodes];
    this.#consoleLog(`Element creations is a success. Returning ${elNodes}`);

    return elNodes; /* return children elements of throwaway root node */
  };
})();
