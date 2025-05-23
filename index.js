import { init } from "./database.js";
import { searchApp } from "./searchApp.js";
import { getReview } from "./getReview.js";
import cron from "node-cron";
 
init();

cron.schedule('*/1 * * * *', () => {
    searchApp();
});

cron.schedule('*/2 * * * *', () => {
    getReview();
});