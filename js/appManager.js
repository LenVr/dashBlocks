
import { CREDITS, LOGIN, MENU, NONE, OPTION } from "./librerias/constantes.js"
import { div } from "./librerias/html.js";

import { MenuController } from "./controllers/menuController/menuController.js";
import { LoginController } from "./controllers/loginController/loginController.js";
import { ReturnController } from "./controllers/returnController/returnController.js";
import { OptionController } from "./controllers/optionsController/optionController.js"
import { CreditsController } from "./controllers/creditsController/creditsController.js";

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: 'mainContainer' });
        this.returnController = new ReturnController(this, this.mainContainer);
        this.controllerContainer = div(this.mainContainer, { className: "controllerContainer" })

        this.menuController = new MenuController(this, this.controllerContainer);
        this.currentController = null;

    }

    showController(type) {
        this.returnController.showBackBtn();
        switch (type) {
            case NONE:
                break;
            case MENU:
                if (this.currentController != null) {
                    this.currentController.delete();
                    this.currentController = null;
                    this.returnController.hideBackBtn();
                }
                break;
            case LOGIN:
                this.currentController = new LoginController(this, this.controllerContainer);
                break;
            case OPTION:
                this.currentController = new OptionController(this, this.controllerContainer);
                break
            case CREDITS:
                this.currentController = new CreditsController(this, this.controllerContainer);
                break
        }
    }
}