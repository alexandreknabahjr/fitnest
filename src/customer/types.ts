import { z } from 'zod'

const CustomerSchema = z.object({

    email: z.string().email(),
    address: z.string(),

})

export {

    CustomerSchema
    
}