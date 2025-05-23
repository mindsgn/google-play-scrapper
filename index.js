import gplay from "google-play-scraper";
import sqlite3 from "sqlite3"
import { open } from 'sqlite';

const start = Date.now();

const db = await open({
  filename: `./apps_${start}.db`,
  driver: sqlite3.Database,
});

db.run("CREATE TABLE apps (appID VARCHAR PRIMARY KEY, title VARCHAR, description VARCHAR)");
db.run("CREATE TABLE reviews (appID VARCHAR, review VARCHAR, score INT, date VARCHAR PRIMARY KEY)");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let reviewList = "";

async function getReview(appId, nextPaginationToken) {
  gplay.reviews({
    appId,
    sort: gplay.sort.RATING,
    num: 3000,
    nextPaginationToken
  }).then(async(response) => {
    const { data: reviews, nextPaginationToken } = response;

    for (const review of reviews){
      const { text, date, score } = review;

      const sql = 'INSERT INTO reviews (appID, review, score, date) VALUES (?, ?, ?, ?)';
      await db.run(sql, [appId, text, score, date]);
      await sleep(1000);
      console.log(reviewList);
    }

    if(!nextPaginationToken) return null
    getReview(appId, nextPaginationToken)
  });
}

gplay
.search({
  term: 'wallet', 
  throttle: 1,
  fullDetail: true,
  num: 1
})
.then( async(response) => {
  for (const app of response){
    const { appId, title, description } = app;
    const sql = 'INSERT INTO apps (appID, title, description) VALUES (?, ?, ?)';
    await db.run(sql, [appId, title, description]);
    await getReview(appId, null);
    await sleep(2000);
  }
}, (error) => {
  console.log(error)
})