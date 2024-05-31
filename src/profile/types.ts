import { z } from 'zod'

import { CreateUserSchema } from 'src/user/types'

const CreateProfileSchema = z.object({

    firstName: z.string(),
    lastName: z.string(),
    age: z.number().int(),
    weight: z.number(),
    height: z.number(),
    userId: z.string().uuid(),
    user: CreateUserSchema

})

export {
    CreateProfileSchema
}