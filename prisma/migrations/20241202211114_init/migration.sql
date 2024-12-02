/*
  Warnings:

  - You are about to drop the column `Avability_Of_Products` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Beer` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Environment` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Online_Orders` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `OverAll` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Prom_And_Disc` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Staff` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Time` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Wine` on the `Review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "Avability_Of_Products",
DROP COLUMN "Beer",
DROP COLUMN "Environment",
DROP COLUMN "Online_Orders",
DROP COLUMN "OverAll",
DROP COLUMN "Prom_And_Disc",
DROP COLUMN "Staff",
DROP COLUMN "Time",
DROP COLUMN "Wine",
ADD COLUMN     "beerRating" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "environmentRating" INTEGER,
ADD COLUMN     "onlineOrderRating" INTEGER,
ADD COLUMN     "overallRating" INTEGER,
ADD COLUMN     "productAvailability" INTEGER,
ADD COLUMN     "promotionsAndDiscounts" INTEGER,
ADD COLUMN     "staffRating" INTEGER,
ADD COLUMN     "wineRating" INTEGER;
