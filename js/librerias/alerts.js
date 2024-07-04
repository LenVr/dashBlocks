import { ERROR, NONE, SUCCESS, WARNING } from "./constantes.js";

export const successAlert = function (message, parent) {
    return alert(SUCCESS, message, parent)
}

export const errorAlert = function (message, parent) {
    return alert(ERROR, message, parent)
}

export const warningAlert = function (message, parent) {
    return alert(WARNING, message, parent)
}

const alert = function (type, message, parent) {

    let div = document.createElement('div');
    div.className = 'alertDiv';
    parent.appendChild(div);

    switch (type) {
        case NONE:
            break;
        case SUCCESS:
            let iconSuccess = document.createElement('p');
            iconSuccess.textContent = '✔';
            iconSuccess.className = 'icon'
            div.appendChild(iconSuccess);
            break;
        case ERROR:
            let iconWrong = document.createElement('p');
            iconWrong.textContent = '☠';
            iconWrong.className = 'icon'
            div.appendChild(iconWrong);
            break;
        case WARNING:
            let iconWarning = document.createElement('p');
            iconWarning.textContent = '⚠'
            iconWarning.className = 'icon'
            div.appendChild(iconWarning);
            break;
        default:
            break;
    }

    let text = document.createElement('p');
    text.className = 'alertText';
    text.textContent = message;
    div.appendChild(text);

    let btn = document.createElement('div');
    btn.className = 'continueBtn';
    btn.innerHTML = 'Continue';
    div.appendChild(btn);
}