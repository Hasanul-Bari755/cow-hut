import { NextFunction, Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import { CowService } from './cow.service'
import pick from '../../../utilities/pick'
import { paginationFields } from '../../../constant/pagination'
import { ICow } from './cow.interface'

const createCow = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...cow } = req.body
    const result = await CowService.createCow(cow)

    sendRes<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Create cow successfully',
      data: result,
    })
    next()
  }
)

const getAllCows = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, [
      'searchTerm',
      'location',
      'breed',
      'category',
    ])
    const maxPriceMinPriceFilter = pick(req.query, ['minPrice', 'maxPrice'])

    const paginationOptions = pick(req.query, paginationFields)

    const result = await CowService.getAllCows(
      filters,
      paginationOptions,
      maxPriceMinPriceFilter
    )

    sendRes<ICow[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cows retrieved successfully',
      meta: result.meta,
      data: result.data,
    })
    next()
  }
)
const getSingleCow = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await CowService.getSingleCow(id)

    sendRes<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Find a single cow  successfully',
      data: result,
    })
    next()
  }
)
const updateCow = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const result = await CowService.updateCow(id, req.body)

    sendRes<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Update cow  successfully',
      data: result,
    })
    next()
  }
)
const deleteCow = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const result = await CowService.deleteCow(id)

    sendRes<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete cow  successfully',
      data: result,
    })
    next()
  }
)

export const CowController = {
  createCow,
  getAllCows,
  getSingleCow,
  updateCow,
  deleteCow,
}
