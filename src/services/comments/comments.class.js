import { commentsModel } from './comments.schema.js';
import Services from 'feathers-mongoose';

const { Service } = Services;

export class CommentsService extends Service {
  async find(params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        post: params.route.post_id,
      },
    };
    console.log(_params);
    return super.find(_params);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: commentsModel(app),
    whitelist: ['$populate'],
  };
};
