export const checkNotDeleted = (context) => {
  if (context.params.route.user_id == 'feed') {
    context.params.query = {
      ...context.params.query,
      isDeleted: false,
    };
  } else {
    context.params.query = {
      ...context.params.query,
      isDeleted: false,
      user: context.params.route.user_id,
    };
  }
};
