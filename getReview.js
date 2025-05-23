import gplay from "google-play-scraper";
import { db } from "./database.js";
import { sleep }  from "./sleep.js";

async function getReview(appId=null, token=null) {
  if(!db) return null;

  if(!appId){
    const response = await db.get(`SELECT * FROM apps ORDER BY RANDOM() LIMIT 1`);

    if(!response) return null;
    const { appID } = response;

    appId = appID;
  }
  
  try{
    await gplay.reviews({
      appId,
      nextPaginationToken: token
    }).then(async(response) => {
      const { data: reviews, nextPaginationToken } = response;

      for (const review of reviews) {
        const { text, date, score } = review;

        const sql = 'INSERT OR IGNORE INTO reviews (appID, review, score, date) VALUES (?, ?, ?, ?)';
        await db.run(sql, [appId, text, score, date]);
        await sleep(1000);
      }

      if(!nextPaginationToken) return null
      console.log(`Fetching: adding more reviews`)
      getReview(appId, nextPaginationToken)
    });
  } catch (error) {
    console.log(error)
  } finally {
    console.log(`Done: adding reviews`)
  }
}

export { getReview }