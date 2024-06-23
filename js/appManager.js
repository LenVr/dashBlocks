import { MenuController } from "./controllers/menuController/menuController.js";
import { div } from "./librerias/html.js";

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: 'mainContainer' });
        this.controllerContainer = div(this.mainContainer, { className: "controllerContainer" })

        this.menuController = new MenuController(this, this.controllerContainer);
        this.currentController = null;

    }
}