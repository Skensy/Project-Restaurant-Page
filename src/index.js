console.log("Hello World!");

import { image } from "./image.js";
import { heading } from "./heading.js";
import { paragraph } from "./paragraph.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const div = document.querySelector("#content");
const btnMenu = document.querySelector("#menu")
const btnHome = document.querySelector("#home");
const btnAbout = document.querySelector("#about")


btnHome.addEventListener("click", () => {
    if (div.contains(about)) {
        div.removeChild(about);
        div.appendChild(image);
        div.appendChild(heading);
        div.appendChild(paragraph);
    }
    if (div.contains(menu)) {
        div.removeChild(menu);
        div.appendChild(image);
        div.appendChild(heading);
        div.appendChild(paragraph);
    }
})

btnMenu.addEventListener("click", () => {
    if (div.contains(image)) {
        div.removeChild(image);
    }
    if (div.contains(heading)) {
        div.removeChild(heading);
    }
    if (div.contains(paragraph)) {
        div.removeChild(paragraph);
    }
    if (div.contains(about)) {
        div.removeChild(about);
    }
    div.appendChild(menu);
})

btnAbout.addEventListener("click", () => {
    if (div.contains(menu)) {
        div.removeChild(menu);
    }
    if (div.contains(image)) {
        div.removeChild(image);
    }
    if (div.contains(heading)) {
        div.removeChild(heading);
    }
    if (div.contains(paragraph)) {
        div.removeChild(paragraph);
    }
    div.appendChild(about);
})

div.appendChild(image);
div.appendChild(heading);
div.appendChild(paragraph);


