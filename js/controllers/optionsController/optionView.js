import { ViewEnhanced } from "../../views/viewEnhanced";


export class OptionView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'optionController';

        this.character = new CharacterController(this, this.elementsContainer);
    }
}