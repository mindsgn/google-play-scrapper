import { init } from "./database.js";
import { searchApp } from "./searchApp.js";
import { getReview } from "./getReview.js";
import { generateIdea } from "./generateIdea.js";

init();

setTimeout(() => {
    searchApp();
}, 1000);

setTimeout(() => {
    getReview();
}, 5000);