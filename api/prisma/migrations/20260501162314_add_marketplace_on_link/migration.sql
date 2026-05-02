/*
  Warnings:

  - Added the required column `marketplace` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "marketplace" TEXT NOT NULL;
