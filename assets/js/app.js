import { valida } from "./validaciones.js";

const inputs = document.querySelector("unput");

inputs.forEach(input => {
    input.addEventListenner('blur', (input) => {
        valida(input.target)
    })
});