import { View } from "../../views/view.js";
import { Controller } from "../controller.js";
import { div } from "../../librerias/html.js";
import { MENU } from "../../librerias/constantes.js";

export class ReturnController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new View(parent);
        this.view.container.className = 'returnController';

        this.backBtn = div(this.view.container, { className: "backBtn", onclick: this.onBackBtn.bind(this), innerHTML: "<---" });
        this.hideBackBtn()
    }


    onBackBtn() {
        this.appManager.showController(MENU);
    }

    hideBackBtn() {
        this.backBtn.classList.add('hidden')
    }

    showBackBtn() {
        this.backBtn.classList.remove('hidden')
    }

}