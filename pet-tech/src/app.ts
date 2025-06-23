import fastify from 'fastify'

import { globalErrorHandler } from '@/utils/global-error-handler'

import { userRoutes } from '@/http/controllers/user/routes'
import { personRoutes } from '@/http/controllers/person/routes'

export const app = fastify()

app.register(personRoutes)
app.register(userRoutes)

app.setErrorHandler(globalErrorHandler)