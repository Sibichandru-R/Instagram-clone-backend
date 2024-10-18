export const PostModel = (app) => {
  const modelName = 'Posts';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const postSchema = new Schema({
    caption: {
      type: String,
      default: '',
    },
    postFile: {
      type: Buffer,
      contentType: String,
    },
    created_date: {
      type: Date,
      default: new Date(),
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  });
  // _id - ObjectId
  // caption - String
  // postFile - Buffer
  // user - Reference Id
  // created_date - Date
  // likes - Number
  return mongooseClient.model(modelName, postSchema);
};
