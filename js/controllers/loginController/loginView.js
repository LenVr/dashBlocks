import { errorAlert, successAlert, warningAlert } from "../../librerias/alerts.js";
import { REGISTER } from "../../librerias/constantes.js";
import { h2, input, div, p, a } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { ReturnController } from "../returnController/returnController.js";

export class LoginView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.usernameLabel = p(this.elementsContainer, { className: 'inputLabel', textContent: 'Username' })
        this.usernameInput = input(this.elementsContainer, { className: "inputSpace", type: 'text' });

        this.passwordLabel = p(this.elementsContainer, { className: 'inputLabel', textContent: 'Password' })
        this.passwordInput = input(this.elementsContainer, { className: "inputSpace", type: 'password' });
        this.loginBtn = div(this.elementsContainer, { className: 'menuBtns', innerHTML: 'Login', onclick: this.onLoginBtn.bind(this), id: 'loggedOut' });

        this.registBtn = div(this.elementsContainer, { className: 'link', textContent: `Don't have an account? Register here`, onclick: this.onRegisterBtn.bind(this) });

        this.forgotPass = div(this.elementsContainer, { className: 'link', textContent: `I forgot my password` });

        this.backBtn = new ReturnController(this, this.elementsContainer);
    }

    onLoginBtn() {
        let username = this.usernameInput.value;
        let password = this.passwordInput.value;
        let passwordSaved = 'cisco'; /* We need to change this to the correct verification way */

        if (username === null || username === '' || username === undefined) {
            errorAlert('You need to enter a username', 'try again', this.elementsContainer);
        } else if (password === null || password === '' || password === undefined || password != passwordSaved) {
            errorAlert('Your password is not correct', 'try again', this.elementsContainer);
        } else {
            successAlert('You logged in successfully', 'Continue', this.elementsContainer)
        }
    }

    onRegisterBtn() {
        this.controller.appManager.showController(REGISTER);
    }
}