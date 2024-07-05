import { Controller } from "../controller.js";

export class OptionController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent)
        this.view = new OptionView(this, parent)
    }
}