import { BLUE, GREEN, PINK, RED } from "../../librerias/constantes.js";
import { div } from "../../librerias/html.js";
import { View } from "../../views/view.js";


export class CharacterView extends View {

    x = 50;
    speed = 25;
    movement;
    width = 3;

    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.container.className = 'characterAppearance';
        this.container.classList = localStorage.getItem('color');

        this.container.id = 'mainCharacter'

        this.container.style.position = 'fixed';
        this.container.style.left = this.x + 'px';

        this.addKeyboardControls();
    }

    addKeyboardControls() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft':
                this.left();
                break;
            case 'ArrowRight':
                this.right();
                break;
        }
    }

    handleKeyUp(e) {
        switch (e.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
                this.freeze();
                break;
        }
    }

    left() {
        if (!this.movement) {
            this.movement = setInterval(() => {
                this.x -= this.speed;
                if (this.x < 0) {
                    this.x = 0;
                    this.freeze()
                }
                this.container.style.left = this.x + "px";
            }, 20)
        }
    };

    right() {
        if (!this.movement) {
            this.movement = setInterval(() => {
                this.x += this.speed;
                const limit = document.body.clientWidth - this.width
                if (this.x > limit) {
                    this.x = limit;
                    this.freeze();
                }
                this.container.style.left = this.x + "px";
            }, 20)
        }
    }

    freeze() {
        clearInterval(this.movement);
        this.movement = undefined;
    };

    changeColor(color) {
        switch (color) {
            case RED:

                this.container.classList.add('red');
                this.container.classList.remove('green', 'pink', 'blue');
                localStorage.setItem('color', 'red');

                break;
            case GREEN:

                this.container.classList.add('green');
                this.container.classList.remove('red', 'pink', 'blue');
                localStorage.setItem('color', 'green');

                break;
            case BLUE:

                this.container.classList.add('blue');
                this.container.classList.remove('green', 'pink', 'red');
                localStorage.setItem('color', 'blue');


                break;
            case PINK:

                this.container.classList.add('pink');
                this.container.classList.remove('green', 'red', 'blue');
                localStorage.setItem('color', 'pink');

                break;
            default:
                break;
        };
    }
}