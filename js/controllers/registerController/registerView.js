import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { p, input, div } from "../../librerias/html.js";
import { ReturnController } from "../returnController/returnController.js";
import { signUp } from "../../../dataBase/signUp.js";
import { errorAlert, successAlert } from "../../librerias/alerts.js";



export class RegisterView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'registerView';

        this.backBtn = new ReturnController(this, this.elementsContainer);

        this.usernameLabel = p(this.elementsContainer, { className: 'inputLabel', textContent: 'Email address' });
        this.usernameInput = input(this.elementsContainer, { className: "inputSpace", type: 'email', id: 'usernameRegister' });

        this.passwordLabel = p(this.elementsContainer, { className: 'inputLabel', textContent: 'Create password' });
        this.passwordInput = input(this.elementsContainer, { className: "inputSpace", type: 'password', id: 'passwordRegister' });

        this.registerBtn = div(this.elementsContainer, { className: 'menuBtns', innerHTML: 'Login', onclick: this.onRegisterBtn.bind(this) });
    }

    onRegisterBtn() {
        const emailInput = this.usernameInput.value;
        const passwordInput = this.passwordInput.value;

        if (emailInput === null || emailInput === undefined || emailInput === '') {
            errorAlert('You need to enter an email', 'try again', this.elementsContainer);
        } else if (passwordInput === null || passwordInput === undefined || passwordInput === '') {
            errorAlert('You need to enter a password', 'try again', this.elementsContainer);
        } else if (passwordInput.length < 6) {
            errorAlert('Your password needs to be greater than 6 characters', 'try again', this.elementsContainer);
        } else {
            signUp();
            successAlert('Congrats! You have signed up', 'continue', this.elementsContainer);
        }
    }
}