import { z } from 'zod'
export const userZod = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Z: Role is required',
    }),
    password: z.string().optional(),
  }),
})
