import { z } from 'zod'

const CreateClientSchema = z.object({

    email: z.string().email(),
    address: z.string()
    
})

export {
    CreateClientSchema
}