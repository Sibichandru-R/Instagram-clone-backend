

import { comments } from './comments/comments.js';
import { user } from './users/users.js'
import { posts } from './posts/posts.js';
export const services = (app) => {
  app.configure(comments);
  app.configure(user);
  app.configure(posts);

  // All services will be registered here
};
