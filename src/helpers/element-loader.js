/* instances to check prototype for valid type checks */
function el(elementType, { id, classList, attrsList, isES, children, text }) {
  this.elementType = elementType;
  this.opts = { id, classList, attrsList, isES, children, text };
}

function textNode(msg) {
  this.msg = msg;
}

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

  newEl = (
    elementType,
    {
      id = null,
      classList = null,
      attrsList = null,
      isES = false,
      children = [],
      text = null,
    } = {},
  ) => {
    return new el(elementType, {
      id,
      classList,
      attrsList,
      isES,
      children,
      text,
    });
  };

  newTextNode = (msg = "") => {
    return new textNode(msg);
  };

  loadElements = (elListArr) => {
    /* DFS creation of all elements */
    let topEl = [];

    const DFSElements = (n, pEl, TOP_EL = true) => {
      if (n === null) {
        return null;
      }
      /* construct element */
      if (n instanceof textNode) {
        if (TOP_EL) {
          this.#throwErrorLog(
            "Text node attempted to be inserted while TOP_EL was true.",
          );
        } else {
          pEl.appendChild(document.createTextNode(n.msg));
        }
      } else {
        const nEl = (() => {
          if (n.opts.isES === true) {
            /* default to svg cause that's my only usage tbh */
            return document.createElementNS(
              "http://www.w3.org/2000/svg",
              n.elementType,
            );
          } else {
            return document.createElement(n.elementType);
          }
        })();
        /* === SETTING OPTIONS === */
        if (n.opts.id !== null) {
          nEl.setAttribute("id", n.opts.id);
        }
        if (n.opts.classList !== null) {
          /* prevent single entry errors */
          if (!Array.isArray(n.opts.classList))
            n.opts.classList = [n.opts.classList];
          nEl.classList.add(...n.opts.classList);
        }
        if (n.opts.text !== null) {
          nEl.textContent = n.opts.text;
        }
        if (n.opts.attrsList !== null) {
          for (const att in n.opts.attrsList) {
            nEl.setAttribute(att, n.opts.attrsList[att]);
          }
        }

        /* === WHERE TO PUSH === */

        if (TOP_EL) {
          topEl.push(nEl);
        } else {
          pEl.appendChild(nEl);
        }

        /* prevent single entry errors */
        if (!Array.isArray(n.opts.children))
          n.opts.children = [n.opts.children];

        for (const c of n.opts.children) {
          DFSElements(c, nEl, false);
        }
      }
    };

    /* ensure the top element is a single node */
    const rootNode = this.newEl("div", { children: elListArr });
    DFSElements(rootNode);

    const elNodes = [...topEl[0].childNodes];
    console.log(elNodes);
    this.#consoleLog(`Element creations is a success. Returning ${elNodes}`);

    return elNodes; /* return children elements of throwaway root node */
  };
})();
