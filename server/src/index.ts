import * as dotenv from 'dotenv';
import { connectToDB } from './db/mongoose';
import { ServerApp } from './server';

dotenv.config();
// if checks to verify env vairbales declared

const run = async () => {
  console.log(process.env.NODE_ENV);
  await connectToDB();
  console.log('connected to mongodb');
  const port = 4000;
  new ServerApp().start(port);
};

run().catch((err) => {
  console.log(err);
});
