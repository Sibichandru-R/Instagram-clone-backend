export const checkNotDeleted = (context) => {
  context.params.query = {
    ...context.params.query,
    //will be added after integrating with user schema
    // $populate: [
    //   {
    //     path: 'user',
    //     select: '',
    //   },
    // ],
    isDeleted: false,
  };
};
