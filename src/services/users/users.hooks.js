import { resolve } from '@feathersjs/schema/lib/index.js';
import { passwordHash } from '@feathersjs/authentication-local';

/**
 * @name userDataResolver
 * @description Hashes the password field
 */
export const userDataResolver = resolve({
  properties: {
    password: passwordHash({ strategy: 'local' }),
  },
});

/**
 * @name userExternalResolver
 * @description Sets the value of passwor fuiel to undefoned
 */
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
