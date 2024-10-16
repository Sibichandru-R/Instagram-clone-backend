export const PostModel = (app) => {
  const modelName = 'Posts';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const postSchema = new Schema({
    caption: {
      type: String,
    },
    postFile: {
      type: Buffer,
    },
    likes: {
      type: Number,
      default: 0,
    },
    created_date: {
      type: Date,
    },
    // user:{
    //   type:Schema.Types.ObjectId,
    //   ref:'User'
    // }
  });
  // _id - ObjectId
  // Caption - String
  // Post File - Buffer
  // User - Reference Id
  // Created_date - Date
  // Likes - Number
  return mongooseClient.model(modelName, postSchema);
};
