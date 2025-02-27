/*
  Warnings:

  - You are about to drop the column `catgegory` on the `Product` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "catgegory",
ADD COLUMN     "category" TEXT NOT NULL;
