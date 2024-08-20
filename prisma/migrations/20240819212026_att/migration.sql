-- AlterTable
ALTER TABLE `event` MODIFY `event_qr_code` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `user` MODIFY `user_date_of_birth` VARCHAR(191) NOT NULL DEFAULT '';
