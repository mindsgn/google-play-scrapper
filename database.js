import sqlite3 from "sqlite3"
import { open } from 'sqlite';

let db = null

async function init(){
  db = await open({
    filename: `./apps.db`,
    driver: sqlite3.Database,
  });

  await db.run(
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
  
  await db.run(
    `
      CREATE TABLE IF NOT EXISTS reviews (
        appID VARCHAR, 
        review VARCHAR, 
        score INT, 
        date VARCHAR PRIMARY KEY
      )
    `
  );

  return;
}

export { db, init }