import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProfileModule } from './profile/profile.module';
import { MealModule } from './meal/meal.module';
import { WorkoutModule } from './workout/workout.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ClientModule, ProfileModule, MealModule, WorkoutModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
