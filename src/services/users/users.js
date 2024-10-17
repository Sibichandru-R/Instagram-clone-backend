import { hooks as schemaHooks } from '@feathersjs/schema'
import { verifyUser } from '../../hooks/verifyUser.js'
import { userDataResolver, userExternalResolver } from './userResolver.js'
import { UserService, getOptions } from './users.class.js'

export const userPath = 'users'
export const userMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './users.class.js'
export * from './users.schema.js'

export const user = (app) => {
  app.use(userPath, new UserService(getOptions(app)), {
    methods: userMethods,

    events: []
  })

  app.service(userPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(userExternalResolver)],
      create: [schemaHooks.resolveData(userDataResolver)]
    },
    before:{
      create:[verifyUser]
    }
  })
}
