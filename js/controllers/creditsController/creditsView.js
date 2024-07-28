import { a, div, h2, p } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { ReturnController } from "../returnController/returnController.js";


export class CreditsView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'creditsController';
        this.backBtn = new ReturnController(this, this.elementsContainer);

        this.title = h2(this.elementsContainer, { className: 'creditsTitle', textContent: 'Developer' });
        this.developer = p(this.elementsContainer, { className: 'developerParagraph', textContent: 'Brandon Len Villalobos Rojas' });
        this.secondTitle = h2(this.elementsContainer, { className: 'creditsTitle', textContent: 'Co-developer' });
        this.coDeveloper = p(this.elementsContainer, { className: 'developerParagraph', textContent: 'My best friend, my beautiful dog, Zoe' });

        this.webContainer = div(this.elementsContainer, { className: 'webContainer' });
        this.linkedIn = a(this.webContainer, { className: 'link', textContent: 'LinkedIn', href: 'https://www.linkedin.com/in/brandon-l-villalobos-rojas-8a5172220', target: "_blank" });
        this.gitHub = a(this.webContainer, { className: 'link', textContent: 'GitHub', href: 'https://github.com/LenVr', target: "_blank" })
    }
}
