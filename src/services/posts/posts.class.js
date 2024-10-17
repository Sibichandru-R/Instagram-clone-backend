import { PostModel } from './posts.schema.js';
import Services from 'feathers-mongoose';

const { Service } = Services;

export class PostsService extends Service {}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: PostModel(app),
    whitelist: ['$populate'],
  };
};
