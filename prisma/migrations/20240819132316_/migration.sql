/*
  Warnings:

  - A unique constraint covering the columns `[event_qr_code]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `event_confirm_registration` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `event_qr_code` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `user` MODIFY `user_date_of_birth` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `Event_event_qr_code_key` ON `Event`(`event_qr_code`);
