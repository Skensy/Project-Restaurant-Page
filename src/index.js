console.log("Hello World!");

import { image } from "./image.js";
import { heading } from "./heading.js";
import { paragraph } from "./paragraph.js";

const div = document.querySelector("#content");

div.appendChild(image);
div.appendChild(heading);
div.appendChild(paragraph);