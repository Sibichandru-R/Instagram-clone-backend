export const LikesModel = (app) => {
  const modelName = 'Likes';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const likesSchema = new Schema({
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    created_date: {
      type: Date,
      default: new Date(),
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  });
  return mongooseClient.model(modelName, likesSchema);
};
