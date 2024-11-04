/*
  Warnings:

  - Added the required column `total_rating` to the `avaliation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `avaliation` ADD COLUMN `total_rating` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `user_date_of_birth` VARCHAR(191) NOT NULL DEFAULT '';
