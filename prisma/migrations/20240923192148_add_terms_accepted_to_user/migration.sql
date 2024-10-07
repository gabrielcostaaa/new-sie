-- AlterTable
ALTER TABLE `user` ADD COLUMN `user_termsAccepted` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `user_date_of_birth` VARCHAR(191) NOT NULL DEFAULT '';
