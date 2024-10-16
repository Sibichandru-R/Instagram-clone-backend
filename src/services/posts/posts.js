// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { PostsService, getOptions } from './posts.class.js';

export const postsPath = 'posts';
export const postsMethods = ['find', 'get', 'create', 'patch', 'remove'];

export * from './posts.class.js';
export * from './posts.schema.js';

export const posts = (app) => {
  app.use(postsPath, new PostsService(getOptions(app)), {
    methods: postsMethods,
    events: [],
  });
  app.service(postsPath).hooks({});
};
