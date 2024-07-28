import { BLUE, CREDITS, GREEN, PINK, RED } from "../../librerias/constantes.js";
import { div, p } from "../../librerias/html.js";
import { ViewEnhanced } from "../../views/viewEnhanced.js";
import { CharacterController } from "../characters/characterController.js"
import { ReturnController } from "../returnController/returnController.js";


export class OptionView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'optionController';
        this.returnController = new ReturnController(this, this.container)

        /* character container */
        this.characterContainer = div(this.elementsContainer, { className: "characterContainerOpt" })
        this.character = new CharacterController(this, this.characterContainer);

        /* Change color */
        this.changeColorText = p(this.elementsContainer, { className: 'changeColorTitle', textContent: 'Change color' });
        this.selectColorContainer = div(this.elementsContainer, { className: 'selectContainer' });
        this.red = div(this.selectColorContainer, { id: 'red', className: 'btnColor', onclick: this.onChangeToRed.bind(this) });
        this.green = div(this.selectColorContainer, { id: 'green', className: 'btnColor', onclick: this.onChangeToGreen.bind(this) });
        this.blue = div(this.selectColorContainer, { id: 'blue', className: 'btnColor', onclick: this.onChangeToBlue.bind(this) });
        this.pink = div(this.selectColorContainer, { id: 'pink', className: 'btnColor', onclick: this.onChangeToPink.bind(this) });

        /* Set volume */
        this.volumeTitle = p(this.elementsContainer, { className: 'volumeTitle', textContent: 'Set the volume' });
        this.setVolumeContainer = div(this.elementsContainer, { className: 'setVolumeContainer' });

        this.volumeIcon = p(this.setVolumeContainer, { className: 'volumeIcon', textContent: '🕪' });
        this.barsVolumeContainer = div(this.setVolumeContainer, { className: 'barsVolumeContainer' })

        this.firstBar = div(this.barsVolumeContainer, { className: 'volumeBars' });
        this.secondBar = div(this.barsVolumeContainer, { className: 'volumeBars' });
        this.thirdBar = div(this.barsVolumeContainer, { className: 'volumeBars' });
        this.fourthBar = div(this.barsVolumeContainer, { className: 'volumeBars' });
        this.fifthBar = div(this.barsVolumeContainer, { className: 'volumeBars' });
        this.sixthBar = div(this.barsVolumeContainer, { className: 'volumeBars' });
        this.seventhBar = div(this.barsVolumeContainer, { className: 'volumeBars' });

        /* log out */

        this.btnsContainer = div(this.elementsContainer, { className: 'btnsContainer' })
        this.creditsBtn = div(this.btnsContainer, { className: 'menuBtns', innerHTML: 'Credits', onclick: this.OnCreditsBtn.bind(this) });
        this.logBtn = div(this.btnsContainer, { className: 'menuBtns', innerHTML: 'Login' });
    }

    onChangeToRed() {
        this.character.character.changeColor(RED);
    }

    onChangeToGreen() {
        this.character.character.changeColor(GREEN);
    }

    onChangeToBlue() {
        this.character.character.changeColor(BLUE);
    }

    onChangeToPink() {
        this.character.character.changeColor(PINK);
    }

    OnCreditsBtn() {
        this.controller.appManager.showController(CREDITS);
    }
}