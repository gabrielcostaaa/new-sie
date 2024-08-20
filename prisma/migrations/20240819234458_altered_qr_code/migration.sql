-- AlterTable
ALTER TABLE `event` ALTER COLUMN `event_qr_code` DROP DEFAULT;

-- AlterTable
ALTER TABLE `user` MODIFY `user_date_of_birth` VARCHAR(191) NOT NULL DEFAULT '';
