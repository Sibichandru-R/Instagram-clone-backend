import { app } from '../app.js';
export const verifyUser = async (context) => {
  const user = context?.arguments[0];
  /**
   * @name checkUser
   * @description check the user is already regisetered by email and userName
   * @param {object} data
   * @param {String} field
   * @returns array
   */
  const checkUser = async (data, field) => {
    if (field === 'email') {
      const userProfile = await app.service('users').find({
        query: {
          email: data,
        },
      });
      return userProfile?.data?.length;
    } else if (field === 'userName') {
      const userProfile = await app.service('users').find({
        query: {
          userName: data,
        },
      });
      return userProfile?.data?.length;
    }
  };
  const email = await checkUser(user.email, 'email');
  const userName = await checkUser(user.userName, 'userName');
  console.log(email, userName);
  if (userName || email) {
    console.log(email, userName);
    throw new Error('the user is already exists');
  }
  context.data = {
    ...context.data,
    created_date: Date.now(),
  };
  return context;
};
