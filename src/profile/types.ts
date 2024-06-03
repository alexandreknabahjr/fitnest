import { z } from 'zod'

const ProfileSchema = z.object({

    firstName: z.string(),
    lastName: z.string(),
    age: z.number().int(),
    weight: z.number(),
    height: z.number(),
    customerId: z.string().uuid(),

})

export {
    ProfileSchema
}