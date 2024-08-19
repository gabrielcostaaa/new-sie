/*
  Warnings:

  - Made the column `event_num_registrations` on table `event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `event` MODIFY `event_num_registrations` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `user_date_of_birth` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `EventRegistration` (
    `registration_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `event_id` INTEGER NOT NULL,
    `registration_qr_code` VARCHAR(191) NOT NULL,
    `registration_status` INTEGER NOT NULL DEFAULT 1,
    `registration_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `presence_confirmed` BOOLEAN NOT NULL DEFAULT false,
    `registration_feedback` VARCHAR(191) NULL,

    UNIQUE INDEX `EventRegistration_registration_qr_code_key`(`registration_qr_code`),
    UNIQUE INDEX `EventRegistration_user_id_event_id_key`(`user_id`, `event_id`),
    PRIMARY KEY (`registration_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EventRegistration` ADD CONSTRAINT `EventRegistration_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventRegistration` ADD CONSTRAINT `EventRegistration_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `Event`(`event_id`) ON DELETE CASCADE ON UPDATE CASCADE;
