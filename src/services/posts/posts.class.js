import { PostModel } from './posts.schema.js';
import Services from 'feathers-mongoose';

const { Service } = Services;

export class PostsService extends Service {
  async create(data, params) {
    const _data = {
      ...data,
      user: params.route.user_id,
    };
    return super.create(_data, params);
  }
  async remove(id, params) {
    const data = {
      isDeleted: true,
    };
    return super.patch(id, data, params);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: PostModel(app),
    whitelist: ['$populate'],
  };
};
