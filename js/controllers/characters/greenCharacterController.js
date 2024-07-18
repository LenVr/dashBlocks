import { Controller } from "../controller.js";
import { GreenCharacterView } from "./greenCharacterView.js"

export class GreenCharacterController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.character = new GreenCharacterView(this, parent)
    }
}