import { LOGIN, OPTION } from "../../librerias/constantes.js";
import { a, div, h2, img, p } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { CharacterController } from "../characters/characterController.js";


export class MenuView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';

        this.titleImg = img(this.elementsContainer, { className: 'titleImg', src: '../../../assets/DashBlocksLogo.png' });
        this.loginBtn = div(this.elementsContainer, { className: 'menuBtns', innerHTML: 'Login', onclick: this.onLoginBtn.bind(this) });
        this.optionBtn = div(this.elementsContainer, { className: 'menuBtns', innerHTML: 'Options', onclick: this.onOptionsBtn.bind(this) });
        this.bottomContainer = div(this.elementsContainer, { className: "bottomContainer" });

        this.sideInfoContainer = div(this.bottomContainer, { className: "sideInfoContainer" });
        this.welcomeMsg = p(this.sideInfoContainer, { className: "sideInfoText", textContent: '> Welcome stranger' });
        this.logOutBtn = a(this.sideInfoContainer, { className: "sideInfoText", textContent: '> Click here to log in/out' });
        this.dashBlocks = a(this.sideInfoContainer, { className: "sideInfoText", textContent: '> Dash_Blocks Version 1.0.0' });

        this.sideTutorialContainer = div(this.bottomContainer, { className: "sideTutorialContainer" })
        this.squareContainer = div(this.sideTutorialContainer, { className: "squareContainer" });
        this.textTutorial = div(this.squareContainer, { className: 'textControl', innerHTML: "Press the arrows in your keyboard to move" })
        this.character = new CharacterController(this, this.squareContainer);

        this.controlsContainer = div(this.sideTutorialContainer, { className: "controlsContainer" });
        this.right = div(this.controlsContainer, { className: "control", innerHTML: "<" })
        this.left = div(this.controlsContainer, { className: "control", innerHTML: ">" })
    }

    onLoginBtn() {
        this.controller.appManager.showController(LOGIN);
    }

    onOptionsBtn() {
        this.controller.appManager.showController(OPTION);
    }
}