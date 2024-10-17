import { PostsService, getOptions } from './posts.class.js';
import { checkNotDeleted } from './posts.hooks.js';

export const postsPath = 'posts';
export const postsMethods = ['find', 'get', 'create', 'patch', 'remove'];

export * from './posts.class.js';
export * from './posts.schema.js';

export const posts = (app) => {
  app.use(postsPath, new PostsService(getOptions(app)), {
    methods: postsMethods,
    events: [],
  });

  app.service(postsPath).hooks({
    before: {
      find: [checkNotDeleted],
      get: [checkNotDeleted],
      create: [], //Need to add data resolver
      patch: [],
      remove: [], //need to add soft delete
    },
  });
};
