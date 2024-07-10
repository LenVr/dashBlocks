import { div, p } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { CharacterController } from "../mainCharacter/characterController.js"


export class OptionView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'optionController';

        this.characterContainer = div(this.elementsContainer, { className: "characterContainerOpt" })
        this.character = new CharacterController(this, this.characterContainer);
        this.changeColorText = p(this.elementsContainer, { className: 'changeColorTitle', textContent: 'Change color' });
        this.selectColorContainer = div(this.elementsContainer, { className: 'selectContainer' });

        this.red = div(this.selectColorContainer, { id: 'red', className: 'btnColor' });
        this.green = div(this.selectColorContainer, { id: 'green', className: 'btnColor' });
        this.blue = div(this.selectColorContainer, { id: 'blue', className: 'btnColor' });
        this.pink = div(this.selectColorContainer, { id: 'pink', className: 'btnColor' });

    }
}