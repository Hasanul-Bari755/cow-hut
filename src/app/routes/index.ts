import express from 'express'
const router = express.Router()
import { UserRoutes } from '../modules/user/user.route'
import { AuthRouters } from '../modules/auth/auth.route'
import { CowRoutes } from '../modules/cow/cow.route'

const appRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/cows',
    route: CowRoutes,
  },
]

appRoutes.forEach(route => router.use(route.path, route.route))

export default router
