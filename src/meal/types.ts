import { z } from 'zod'

const MealSchema = z.object({
    foods: z.array(z.string()),
    calories: z.number().positive().optional(),
    carbs: z.number().positive().optional(),
    protein: z.number().positive().optional(),
    fats: z.number().positive().optional(),
    date: z.string().datetime(),
    clientId: z.string().uuid()
})

export {
    MealSchema
}