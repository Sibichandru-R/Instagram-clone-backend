import { LikesModel } from './likes.schema.js';
import Services from 'feathers-mongoose';

const { Service } = Services;
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class LikesService extends Service {
  async find(params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        post: params.route.post_id,
        user: params.route.user_id,
      },
    };
    return super.find(_params);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: LikesModel(app),
    whitelist: ['$populate'],
  };
};
