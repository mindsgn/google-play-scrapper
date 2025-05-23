import sqlite3 from "sqlite3"
import { open } from 'sqlite';

let db = null

db = await open({
  filename: `./apps.db`,
  driver: sqlite3.Database,
});

async function init(){
  
  db.run(
    `
      CREATE TABLE IF NOT EXISTS apps (
        appID VARCHAR PRIMARY KEY,
        title VARCHAR, 
        description VARCHAR, 
        summary VARCHAR, 
        installs VARCHAR, 
        minInstalls INT, 
        maxInstalls INT, 
        score INT,
        genre VARCHAR,
        ratings INT, 
        reviews INT, 
        url VARCHAR, 
        updated INT, 
        released VARCHAR
      );
    `
  );
  
  db.run(
    `
      CREATE TABLE IF NOT EXISTS reviews (
        appID VARCHAR, 
        review VARCHAR, 
        score INT, 
        date VARCHAR PRIMARY KEY
      )
    `
  );
}

export { db, init }