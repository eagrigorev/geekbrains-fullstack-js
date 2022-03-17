import("./style.scss");
import { renderItem } from "./renderItem.js";
import content from "./content.js";

const gallery = document.getElementById("gallery");
content.map((item) => {
    gallery.innerHTML += renderItem(item);
});
