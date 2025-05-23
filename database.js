import sqlite3 from "sqlite3"
import { open } from 'sqlite';

let db = null 

db = await open({
  filename: `./apps.db`,
  driver: sqlite3.Database,
});

async function init(){
  console.log("hello")
}

export { db, init }