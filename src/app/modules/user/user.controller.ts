import { Request, Response } from 'express'

import { sendRes } from '../../../utilities/sendRes'
import { tryCatch } from '../../../utilities/tryCatch'

import httpStatus from 'http-status'
import { UserService } from './user.services'

const getAllUsers = tryCatch(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers()
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Find All Users successfully',
    data: result,
  })
})
const getSingleUser = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await UserService.getSingleUser(id)
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Find single user  successfully',
    data: result,
  })
})
const updateUser = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await UserService.UpdateUser(id, req.body)
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Find single user  successfully',
    data: result,
  })
})
const deleteUser = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await UserService.deleetUser(id)
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update user  successfully',
    data: result,
  })
})

export const UserController = {
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
}
