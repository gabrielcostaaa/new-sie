/*
  Warnings:

  - You are about to drop the column `event_end_datetime` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `event_registration_end_datetime` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `event_registration_start_datetime` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `event_start_datetime` on the `event` table. All the data in the column will be lost.
  - Added the required column `event_end_date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_end_time` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_registration_end_date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_registration_end_time` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_registration_start_date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_registration_start_time` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_start_date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_start_time` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `event_end_datetime`,
    DROP COLUMN `event_registration_end_datetime`,
    DROP COLUMN `event_registration_start_datetime`,
    DROP COLUMN `event_start_datetime`,
    ADD COLUMN `event_end_date` VARCHAR(191) NOT NULL,
    ADD COLUMN `event_end_time` VARCHAR(191) NOT NULL,
    ADD COLUMN `event_registration_end_date` VARCHAR(191) NOT NULL,
    ADD COLUMN `event_registration_end_time` VARCHAR(191) NOT NULL,
    ADD COLUMN `event_registration_start_date` VARCHAR(191) NOT NULL,
    ADD COLUMN `event_registration_start_time` VARCHAR(191) NOT NULL,
    ADD COLUMN `event_start_date` VARCHAR(191) NOT NULL,
    ADD COLUMN `event_start_time` VARCHAR(191) NOT NULL;
