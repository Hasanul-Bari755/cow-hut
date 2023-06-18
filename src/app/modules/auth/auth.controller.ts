import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { AuthService } from './auth.service'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'

export const createUser = tryCatch(async (req: Request, res: Response) => {
  const { ...users } = req.body
  const result = await AuthService.createUser(users)

  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create users successfully',
    data: result,
  })
})

export const AuthController = {
  createUser,
}
