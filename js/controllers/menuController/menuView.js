import { div, h2 } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";


export class MenuView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';

        this.title = h2(this.elementsContainer, { innerHTML: "Welcome to DashBlocks" });

        this.loginBtn = div(this.elementsContainer)
    }
}