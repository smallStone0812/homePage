import { isEqual } from "lodash-es";

interface Position {
  x: number;
  y: number;
}

interface CursorPosition {
  curr: Position | null;
  prev: Position | null;
}

let mainCursor: Cursor;

const lerp = (a: number, b: number, n: number): number => {
  if (Math.round(a) === b) {
    return b;
  }
  return (1 - n) * a + n * b;
};

const getStyle = (el: HTMLElement, attr:any): string | boolean => {
  try {
    return window.getComputedStyle ? window.getComputedStyle(el)[attr] : (el as any).currentStyle[attr];
  } catch (e) {
    console.error(e);
  }
  return false;
};

const cursorInit = (): Cursor => {
  mainCursor = new Cursor();
  return mainCursor;
};

class Cursor {
  pos: CursorPosition;
  pt: string[];
  cursor: HTMLDivElement | null;
  scr: HTMLStyleElement | null;

  constructor() {
    this.pos = {
      curr: null,
      prev: null,
    };
    this.pt = [];
    this.cursor = null;
    this.scr = null;
    this.create();
    this.init();
    this.render();
  }

  move(left: number, top: number): void {
    if (this.cursor) {
      this.cursor.style.left = `${left}px`;
      this.cursor.style.top = `${top}px`;
    }
  }

  create(): void {
    if (!this.cursor) {
      this.cursor = document.createElement("div");
      this.cursor.id = "cursor";
      this.cursor.classList.add("xs-hidden");
      this.cursor.classList.add("hidden");
      document.body.append(this.cursor);
    }

    const el = document.getElementsByTagName("*");
    for (let i = 0; i < el.length; i++) {
      if (getStyle(el[i] as HTMLElement, "cursor") === "pointer") {
        this.pt.push(el[i].outerHTML);
      }
    }

    this.scr = document.createElement("style");
    document.body.appendChild(this.scr);
    this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='10px' height='10px'><circle cx='4' cy='4' r='4' fill='white' /></svg>") 4 4, auto !important}`;
  }

  refresh(): void {
    if (this.scr) {
      this.scr.remove();
    }
    if (this.cursor) {
      this.cursor.classList.remove("active");
    }
    this.pos = {
      curr: null,
      prev: null,
    };
    this.pt = [];

    this.create();
    this.init();
    this.render();
  }

  init(): void {
    document.onmousemove = (e: MouseEvent) => {
      if (this.pos.curr === null && this.cursor) {
        this.move(e.clientX - 8, e.clientY - 8);
      }
      this.pos.curr = {
        x: e.clientX - 8,
        y: e.clientY - 8,
      };
      if (this.cursor) {
        this.cursor.classList.remove("hidden");
      }
      this.render();
    };
    document.onmouseenter = () => {
      if (this.cursor) {
        this.cursor.classList.remove("hidden");
      }
    };
    document.onmouseleave = () => {
      if (this.cursor) {
        this.cursor.classList.add("hidden");
      }
    };
    document.onmousedown = () => {
      if (this.cursor) {
        this.cursor.classList.add("active");
      }
    };
    document.onmouseup = () => {
      if (this.cursor) {
        this.cursor.classList.remove("active");
      }
    };
  }

  render(): void {
    if (this.pos.prev && this.pos.curr) {
      this.pos.prev.x = lerp(this.pos.prev.x, this.pos.curr.x, 0.35);
      this.pos.prev.y = lerp(this.pos.prev.y, this.pos.curr.y, 0.35);
      this.move(this.pos.prev.x, this.pos.prev.y);
    } else {
      this.pos.prev = this.pos.curr;
    }
    if (this.pos.curr && this.pos.prev && !isEqual(this.pos.curr, this.pos.prev)) {
      requestAnimationFrame(() => this.render());
    }
  }
}

export default cursorInit;