import gplay from "google-play-scraper";
import { getRandomWord } from "./wordlist.js";
import { db } from "./database.js";
import { sleep } from "./sleep.js";

async function searchApp () {
  if(!db) return null;
  const term = getRandomWord();
  console.log(`searching: ${term}`);
  try{
    await gplay.search({
      term,
      fullDetail: true,
      num: 250
    }).then( async(response) => {
      for (const app of response){
        const {
            appId, 
            title, 
            description, 
            summary, 
            installs, 
            minInstalls,
            maxInstalls,
            score,
            genre,
            ratings,
            reviews,
            url,
            updated,
            released
        } = app;
        
        const sql = `
          INSERT OR IGNORE INTO apps (
            appID, 
            title, 
            description, 
            summary, 
            installs, 
            minInstalls, 
            maxInstalls, 
            score, 
            genre,
            ratings, 
            reviews, 
            url, 
            updated, 
            released
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        await db.run(sql, [
          appId, 
          title, 
          description,
          summary, 
          installs,
          minInstalls,
          maxInstalls,
          score,
          genre,
          ratings,
          reviews,
          url,
          updated,
          released
        ]);
        await sleep(2000);
      }
    }, (error) => {
      console.log(error);
    })
  } catch (error){
    console.log(error);
  } finally {
    console.log(`Done: searching ${term}`)
  }
}

export { searchApp }