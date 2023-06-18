import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.get('/:id', UserController.getSingleUser)
router.delete('/:id', UserController.deleteUser)
router.patch('/:id', UserController.updateUser)

router.get('/', UserController.getAllUsers)

export const UserRoutes = router
