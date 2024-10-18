import { PostsService, getOptions } from './posts.class.js';
import { checkNotDeleted, testFunction } from './posts.hooks.js';

import multer from 'multer';
const multipartMiddleware = multer();

export const postsPath = 'users/:user_id/posts';
export const postsMethods = ['find', 'get', 'create', 'patch', 'remove'];

export * from './posts.class.js';
export * from './posts.schema.js';

export const posts = (app) => {
  app.use(
    postsPath,
    multipartMiddleware.single('postFile'),

    function (req, res, next) {
      req.feathers.caption = req.body.caption;
      req.feathers.file = req.file;
      next();
    },
    new PostsService(getOptions(app)),
    {
      methods: postsMethods,
      events: [],
    }
  );

  app.service(postsPath).hooks({
    before: {
      find: [checkNotDeleted],
      get: [checkNotDeleted],
      create: [testFunction], //Need to add data resolver
      patch: [],
      remove: [], //need to add soft delete
    },
  });
};
