import { z } from 'zod'

const ClientSchema = z.object({

    email: z.string().email(),
    address: z.string(),

})

export {

    ClientSchema
    
}