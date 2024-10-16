import { comments } from './comments/comments.js';
import { posts } from './posts/posts.js';
export const services = (app) => {
  // app.configure(comments)

  app.configure(posts);

  // All services will be registered here
};
