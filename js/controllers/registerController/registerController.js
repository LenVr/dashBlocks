import { Controller } from "../controller.js";
import { RegisterView } from "./registerView.js";

export class RegisterController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent)
        this.view = new RegisterView(this, parent)
    }
}