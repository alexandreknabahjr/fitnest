import { z } from 'zod'

const MealSchema = z.object({
    foods: z.string().array(),
    calories: z.number().positive(),
    protein: z.number().positive(),
    fats: z.number().positive(),
    date: z.string().datetime(),
    clientId: z.string().uuid()
})

export {
    MealSchema
}