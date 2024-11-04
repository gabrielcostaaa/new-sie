-- AlterTable
ALTER TABLE `user` MODIFY `user_date_of_birth` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `avaliation` (
    `avaliation_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `event_id` INTEGER NOT NULL,
    `estrutura` INTEGER NOT NULL,
    `organizacao` INTEGER NOT NULL,
    `conteudo` INTEGER NOT NULL,
    `palestrantes` INTEGER NOT NULL,
    `feedback` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Avaliation_user_id_event_id_key`(`user_id`, `event_id`),
    PRIMARY KEY (`avaliation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `avaliation` ADD CONSTRAINT `avaliation_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`event_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliation` ADD CONSTRAINT `avaliation_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
