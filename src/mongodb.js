import mongoose from 'mongoose';

export const mongodb = (app) => {
  const connection = app.get('mongodb');
  // const database = new URL(connection).pathname.substring(1);
  const mongoClient = mongoose
  .connect(connection)
  .then(() => console.log('Connected to MongoDb'));

  app.set('mongodbClient', mongoClient);
};
