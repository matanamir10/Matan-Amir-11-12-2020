import * as dotenv from 'dotenv';
import { connectToDB } from './db/mongoose';
import { ServerApp } from './server';

dotenv.config();
// if checks to verify env vairbales declared

const run = async () => {
  await connectToDB();
  const port = 4000;
  new ServerApp().start(port);
};

run().catch((err) => {
  console.log(err);
});
