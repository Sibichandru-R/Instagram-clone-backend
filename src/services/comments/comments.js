// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema';

import { CommentsService, getOptions } from './comments.class.js';

export const commentsPath = 'posts/:post_id/comments';

export const commentsMethods = ['find', 'get', 'create', 'patch', 'remove'];

export * from './comments.class.js';
export * from './comments.schema.js';


export const comments = (app) => {
  app.use(commentsPath, new CommentsService(getOptions(app)), {
    methods: commentsMethods,
    events: [],
  });
  app.service(commentsPath).hooks({
    around: {
      all: [],
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
      patch: [],
      remove: [],
    },
    after: {
      all: [],
    },
    error: {
      all: [],
    },
  });
};
