import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { p, input, div } from "../../librerias/html.js"


export class RegisterView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'registerView';

        this.usernameLabel = p(this.elementsContainer, { className: 'inputLabel', textContent: 'Create username' })
        this.usernameInput = input(this.elementsContainer, { className: "inputSpace", type: 'text' });

        this.passwordLabel = p(this.elementsContainer, { className: 'inputLabel', textContent: 'Password' })
        this.passwordInput = input(this.elementsContainer, { className: "inputSpace", type: 'password' });

        this.confirmPasswordLabel = p(this.elementsContainer, { className: 'inputLabel', textContent: 'Confirm password' })
        this.confirmPasswordInput = input(this.elementsContainer, { className: "inputSpace", type: 'password' });

        this.loginBtn = div(this.elementsContainer, { className: 'menuBtns', innerHTML: 'Login' });
    }
}