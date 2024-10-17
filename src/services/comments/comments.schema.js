export const commentsModel = (app) => {
  const modelName = 'Comments';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const commentSchema = new Schema({
    comment: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    created_date: {
      type: Date,
      default: new Date(),
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Posts',
    },
  });
  return mongooseClient.model(modelName, commentSchema);
};
