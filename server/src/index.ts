import * as dotenv from 'dotenv';
import { connectToDB } from './db/mongoose';

dotenv.config();
// if checks to verify env vairbales declared

const run = async () => {
  console.log(process.env.NODE_ENV);
  await connectToDB();
  console.log('connected to mongodb');
};

run().catch((err) => {
  console.log(err);
});
