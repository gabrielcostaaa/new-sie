-- AlterTable
ALTER TABLE `event` MODIFY `event_end_date` VARCHAR(191) NOT NULL,
    MODIFY `event_registration_end_date` VARCHAR(191) NOT NULL,
    MODIFY `event_registration_start_date` VARCHAR(191) NOT NULL,
    MODIFY `event_start_date` VARCHAR(191) NOT NULL;
