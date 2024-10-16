import { PostModel } from './posts.schema.js';
import Services from 'feathers-mongoose';

const { Service } = Services;

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class PostsService extends Service {}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: PostModel(app),
  };
};
