-- CreateEnum
CREATE TYPE "WorkoutType" AS ENUM ('CARDIO', 'STRENGTH', 'CROSSFIT', 'FLEXIBILITY');

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "workoutType" "WorkoutType" NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "foods" TEXT[],
    "calories" DOUBLE PRECISION,
    "carbs" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "fats" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_clientId_key" ON "Profile"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Workout_clientId_key" ON "Workout"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Meal_clientId_key" ON "Meal"("clientId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
