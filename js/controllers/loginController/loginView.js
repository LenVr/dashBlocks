import { errorAlert, successAlert, warningAlert } from "../../librerias/alerts.js";
import { h2, input, div, p } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { ReturnController } from "../returnController/returnController.js";

export class LoginView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.usernameLabel = p(this.elementsContainer, { className: 'loginInputLabel', textContent: 'Username' })
        this.usernameInput = input(this.elementsContainer, { className: "inputLogin", type: 'text' });

        this.passwordLabel = p(this.elementsContainer, { className: 'loginInputLabel', textContent: 'Password' })
        this.passwordInput = input(this.elementsContainer, { className: "inputLogin", type: 'password' });
        this.loginBtn = div(this.elementsContainer, { className: 'menuBtns', innerHTML: 'Login', onclick: this.onLoginBtn.bind(this) });

        this.backBtn = new ReturnController(this, this.elementsContainer);
    }

    onLoginBtn() {
        successAlert('You logged in successfully', 'Continue', this.elementsContainer)
    }
}