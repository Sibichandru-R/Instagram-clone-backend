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
    }
    return super.find(_params);
  }
  /**
   * @name get
   * @description this method is used to retrive the specific comment
   * @param {String} id 
   * @param {Object} params 
   * @returns Object
   */
    async get(id, params) {
      const _params = {
      ...params,
      query: {
        ...params.query,
        post: params.route.post_id,
      },
    }
    return super.get(id, _params);
  }

  /**
   * @name create 
   * @description This method is used to create a new Comments
   * @param {String} data 
   * @param {Object} params 
   * @returns Object
   */
  async create(data, params) {
    console.log(data, params);
    const _data = {
      ...data,
      post: params.route.post_id,
    };

    return super.create(_data);
  }

  /**
   * @name remove
   * @description This method is used to soft delete the comments field 
   * @param {String} id
   * @param {Object} params
   * @returns Object
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
    Model: commentsModel(app),
    whitelist: ['$populate'],
  };
};
