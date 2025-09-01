import { plus } from "./test.js";
import android from './android.png';


console.log(plus(2, 3));


document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${android}">`;
});