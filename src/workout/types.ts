import { WorkoutType } from '@prisma/client'
import { z } from 'zod'

const WorkoutSchema = z.object({

    name: z.string(),
    duration: z.number().int(),
    date: z.string().datetime(),
    workoutType: z.nativeEnum(WorkoutType),
    clientId: z.string().uuid()
    
})

export {
    WorkoutSchema
}