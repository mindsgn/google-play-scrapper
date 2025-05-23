import { db } from "./database.js";

export async function generateIdea() {
    if(!db) return null;
    const response = await db.get(`SELECT * FROM apps ORDER BY RANDOM() LIMIT 1`);

    const {
        appID: appId,
    } = response;
    
    const reviews =  await db.get(`SELECT * FROM reviews WHERE appID = ?`, [appId]);
    console.log(appId, reviews);
}

generateIdea();