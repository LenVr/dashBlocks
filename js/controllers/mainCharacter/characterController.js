import { Controller } from "../controller.js";
import { CharacterView } from "./characterView.js"

export class CharacterController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.character = new CharacterView(this, parent)
    }
}