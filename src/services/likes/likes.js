import { LikesService, getOptions } from './likes.class.js';

export const likesPath = 'likes';
export const likesMethods = ['find', 'get', 'create', 'patch', 'remove'];

export * from './likes.class.js';
export * from './likes.schema.js';

export const likes = (app) => {
  app.use(likesPath, new LikesService(getOptions(app)), {
    methods: likesMethods,
    events: [],
  });
  app.service(likesPath).hooks({});
};
