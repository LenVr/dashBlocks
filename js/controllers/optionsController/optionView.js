import { BLUE, GREEN, PINK, RED } from "../../librerias/constantes.js";
import { div, p } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { CharacterController } from "../characters/characterController.js"
import { ReturnController } from "../returnController/returnController.js";


export class OptionView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'optionController';

        this.returnController = new ReturnController(this, this.container)
        this.characterContainer = div(this.elementsContainer, { className: "characterContainerOpt" })
        this.character = new CharacterController(this, this.characterContainer);

        this.changeColorText = p(this.elementsContainer, { className: 'changeColorTitle', textContent: 'Change color' });
        this.selectColorContainer = div(this.elementsContainer, { className: 'selectContainer' });
        this.red = div(this.selectColorContainer, { id: 'red', className: 'btnColor', onclick: this.onChangeToRed.bind(this) });
        this.green = div(this.selectColorContainer, { id: 'green', className: 'btnColor', onclick: this.onChangeToGreen.bind(this) });
        this.blue = div(this.selectColorContainer, { id: 'blue', className: 'btnColor', onclick: this.onChangeToBlue.bind(this) });
        this.pink = div(this.selectColorContainer, { id: 'pink', className: 'btnColor', onclick: this.onChangeToPink.bind(this) });
    }

    onChangeToRed() {
        this.character.character.changeColor(RED);
    }

    onChangeToGreen() {
        this.character.character.changeColor(GREEN);
    }

    onChangeToBlue() {
        this.character.character.changeColor(BLUE);
    }

    onChangeToPink() {
        this.character.character.changeColor(PINK);
    }
}