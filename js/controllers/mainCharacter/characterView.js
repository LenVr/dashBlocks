import { div } from "../../librerias/html.js";
import { View } from "../../views/view.js";


export class CharacterView extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.container.className = 'characterAppearance'
        this.square = div(this.container, { className: 'square' })
    }
}