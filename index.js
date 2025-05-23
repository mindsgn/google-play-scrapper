import { init } from "./database.js";
import { searchApp } from "./searchApp.js";
import cron from "node-cron";
 
init();

cron.schedule('*/1 * * * *', () => {
    searchApp();
});