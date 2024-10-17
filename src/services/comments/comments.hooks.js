export const checkNotDeleted = (context) => {
  context.params.query = {
    ...context.params.query,
    isDeleted: false,
  };
};
