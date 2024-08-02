/*
  Warnings:

  - You are about to alter the column `event_end_date` on the `event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `event_registration_end_date` on the `event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `event_registration_start_date` on the `event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `event_start_date` on the `event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `event` MODIFY `event_end_date` DATETIME(3) NOT NULL,
    MODIFY `event_registration_end_date` DATETIME(3) NOT NULL,
    MODIFY `event_registration_start_date` DATETIME(3) NOT NULL,
    MODIFY `event_start_date` DATETIME(3) NOT NULL;
