-- CreateEnum
CREATE TYPE "WorkoutType" AS ENUM ('CARDIO', 'STRENGTH', 'CROSSFIT', 'FLEXIBILITY');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "workoutType" "WorkoutType" NOT NULL,
    "customerId" TEXT NOT NULL,

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
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_customerId_key" ON "Profile"("customerId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
