import * as dotenv from 'dotenv';
import { connectToDB } from './db/mongoose';
import { ServerApp } from './server';

dotenv.config();

if (!process.env.MONGO_URI || !process.env.JWT_KEY) {
  throw new Error('MONGO_URI and JWT_KEY must be provided');
}
const run = async () => {
  await connectToDB();
  const port = parseInt(process.env.PORT!) || 4000;
  new ServerApp().start(port);
};

run().catch((err) => {
  console.log(err);
  process.exit(0);
});
