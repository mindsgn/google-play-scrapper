import { init } from "./database.js";
import { searchApp } from "./searchApp.js";
import { getReview } from "./getReview.js";
// import { generateIdea } from "./generateIdea.js";
import cron from "node-cron";
 
init();

cron.schedule('*/10 * * * *', () => {
    searchApp();
});

cron.schedule('*/30 * * * *', () => {
    getReview();
});
