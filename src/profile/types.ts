import { z } from 'zod'

const CreateProfileSchema = z.object({

    firstName: z.string(),
    lastName: z.string(),
    age: z.number().int(),
    weight: z.number(),
    height: z.number(),
    clientId: z.string().uuid(),

})

export {
    CreateProfileSchema
}