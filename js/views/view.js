import { div } from "../librerias/html";

export class View {
    constructor() {
        this.parent = parent;
        this.container = div(parent, null)
    }

    delete() {
        this.parent.removeChild(this.container);
    }
}