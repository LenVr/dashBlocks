import { a, div, h2, img, p } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { CharacterController } from "../mainCharacter/characterController.js";


export class MenuView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';

        this.titleImg = img(this.elementsContainer, { className: 'titleImg', src: '../../../assets/DashBlocksLogo.png' });

        this.loginBtn = div(this.elementsContainer, { className: 'menuBtns', innerHTML: 'Login' });

        this.optionBtn = div(this.elementsContainer, { className: 'menuBtns', innerHTML: 'Options' });

        this.bottomContainer = div(this.elementsContainer, { className: "bottomContainer" });


        this.sideInfoContainer = div(this.bottomContainer, { className: "sideInfoContainer" });

        this.welcomeMsg = p(this.sideInfoContainer, { className: "sideInfoText", textContent: '> Welcome stranger' });
        this.logOutBtn = a(this.sideInfoContainer, { className: "sideInfoText", textContent: '> Click here to log in/out' });
        this.dashBlocks = a(this.sideInfoContainer, { className: "sideInfoText", textContent: '> Dash_Blocks Version 1.0.0' });

        this.sideTutorialContainer = div(this.bottomContainer, { className: "sideTutorialContainer" })
        this.squareContainer = div(this.sideTutorialContainer, { className: "squareContainer" });
        this.controlsContainer = div(this.sideTutorialContainer, { className: "controlsContainer" });
        this.right = div(this.controlsContainer, { className: "control", innerHTML: "<" })
        this.left = div(this.controlsContainer, { className: "control", innerHTML: ">" })

        this.Character = new CharacterController(this, this.squareContainer)
    }
}