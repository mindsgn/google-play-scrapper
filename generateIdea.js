import { db } from "./database.js";

export async function generateIdea() {
    if(!db) return null;
    const response = await db.get(`SELECT * FROM apps ORDER BY RANDOM() LIMIT 1`);

    const {
        appID: appId, 
        title,
        description, 
        ratings,
        /*
           
            summary, 
            installs,
            minInstalls, 
            maxInstalls, 
            score, 
            
            reviews, 
            updated, 
            released 
        */
    } = response;
    
    const reviewList = await db.get(`SELECT * FROM reviews WHERE appID = ?`, [appId]);
    
    if(reviewList){
        console.log(title);
        console.log(description);
        console.log(ratings);
        console.log(review);
    }
}

generateIdea()