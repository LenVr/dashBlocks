import { div } from "../librerias/html.js";
import { View } from "./view.js";

export class ViewEnhanced extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.fade = div(this.container, { className: "fade" });

        this.elementsContainer = div(this.container, { className: "elementsContainer" });
    }
}