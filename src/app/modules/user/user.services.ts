import { IUser } from './user.interface'
import { User } from './user.model'

const getAllUsers = async (): Promise<IUser[] | null> => {
  const result = User.find({})

  return result
}

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = User.findById(id)
  return result
}
const UpdateUser = async (
  id: string,
  payload: IUser
): Promise<IUser | null> => {
  const result = User.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleetUser = async (id: string): Promise<IUser | null> => {
  const result = User.findByIdAndDelete(id)
  return result
}

export const UserService = {
  getAllUsers,
  getSingleUser,
  deleetUser,
  UpdateUser,
}
