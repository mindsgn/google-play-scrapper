import gplay from "google-play-scraper";
import { getRandomWord } from "./wordlist.js";
import { db } from "./database.js";
import { sleep } from "./sleep.js";

const term = getRandomWord();

function searchApp () {
  try{
    gplay.search({
      term,
      throttle: 1,
      fullDetail: true
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
            ratings,
            reviews,
            url,
            updated,
            released
        } = app;

        const sql = `
          INSERT INTO apps (
            appID, 
            title, 
            description, 
            summary, 
            installs, 
            minInstalls, 
            maxInstalls, 
            score, 
            ratings, 
            reviews, 
            url, 
            updated, 
            released
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        await db.run(sql, [
          appId, 
          title, 
          description,
          summary, 
          installs,
          minInstalls,
          maxInstalls,
          score,
          ratings,
          reviews,
          url,
          updated,
          released
        ]);
        await sleep(2000);
      }
    }, (error) => {
      console.log(error)
    })
  } catch (error){
    console.log(error);
  }
}

export { searchApp }