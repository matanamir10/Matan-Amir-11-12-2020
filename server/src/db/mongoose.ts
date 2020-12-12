import mongoose from 'mongoose';

export const connectToDB = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect('mongodb://localhost:27017/Messages', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(resolve)
      .catch(reject);
  });
};
