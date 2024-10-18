import { PostModel } from './posts.schema.js';
import Services from 'feathers-mongoose';

const { Service } = Services;

export class PostsService extends Service {
  async find(params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        user: params.route.user_id,
      },
    };
    return super.find(_params);
  }

  async get(id, params) {
    console.log(params);
    const _params = {
      ...params,
      query: {
        ...params.query,
        user: params.route.user_id,
      },
    };
    return super.get(id, _params);
  }
  /**
   * @name create
   * @param {Object} data
   * @param {Object} params
   * @returns {Object}
   */

  async create(data, params) {
    const _data = {
      ...data,
      user: params.route.user_id,
      caption: params.caption,
      postFile: params.file.buffer,
    };
    return super.create(_data, params);
  }
  /**
   * @name remove
   * @param {Object} id
   * @param {Object} params
   * @returns {Object}
   */
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
