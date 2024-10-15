import mongoose from 'mongoose';

export const mongooseClient = async (app) => {
  const connection = app.get('mongodb');
  const database = new URL(connection).pathname.substring(1);
  const mongooseConnection = await mongoose.connect(connection);
  
};
