/*
  Warnings:

  - You are about to alter the column `weight` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `height` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "weight" SET DATA TYPE INTEGER,
ALTER COLUMN "height" SET DATA TYPE INTEGER;
