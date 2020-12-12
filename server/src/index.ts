import { connectToDB } from './db/mongoose';

const run = async () => {
  await connectToDB();
  console.log('connected to mongodb');
};

run().catch((err) => {
  console.log(err);
});
