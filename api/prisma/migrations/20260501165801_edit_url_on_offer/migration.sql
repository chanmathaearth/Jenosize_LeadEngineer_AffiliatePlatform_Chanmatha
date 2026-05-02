/*
  Warnings:

  - Made the column `url` on table `Offer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Offer" ALTER COLUMN "url" SET NOT NULL;
