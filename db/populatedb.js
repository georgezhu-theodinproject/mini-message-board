#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR ( 255 ),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username) 
VALUES
  ('Hi there!', 'amando'),
  ('Hello world!', 'charles'),
  ('Testing 123', 'george'),
  ('PostgreSQL is great', 'alex'),
  ('Random message', 'sam'),
  ('Another entry', 'jordan'),
  ('Learning SQL', 'taylor');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://george:password@localhost:5432/mini_message_board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
