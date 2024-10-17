import { resolve } from '@feathersjs/schema/lib/index.js';
import { passwordHash } from '@feathersjs/authentication-local';
export const userDataResolver = resolve({
  properties: {
    password: passwordHash({ strategy: 'local' }),
  },
});
export const userExternalResolver = resolve({
  properties: {
    password: async () => undefined,
  },
});

export const checkNotDeleted = (context) => {
  context.params.query = {
    ...context.params.query,
    isDeleted: false,
  };
};
