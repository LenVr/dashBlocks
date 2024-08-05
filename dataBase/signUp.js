import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./app.js";


export const signUp = async function () {

    const inputEmail = document.getElementById('usernameRegister');
    const inputPassword = document.getElementById('passwordRegister');
    const email = inputEmail.value;
    const password = inputPassword.value;

    console.log(password, email);

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            return false;
        }
        return false;
    }
}