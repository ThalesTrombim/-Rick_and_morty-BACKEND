/*
  Warnings:

  - You are about to drop the column `dimension` on the `planets` table. All the data in the column will be lost.
  - You are about to drop the column `first_episode` on the `planets` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `planets` table. All the data in the column will be lost.
  - You are about to drop the column `some_habitants` on the `planets` table. All the data in the column will be lost.
  - Added the required column `id_reference` to the `planets` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `planets` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `planets` DROP COLUMN `dimension`,
    DROP COLUMN `first_episode`,
    DROP COLUMN `name`,
    DROP COLUMN `some_habitants`,
    ADD COLUMN `id_reference` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `image` VARCHAR(191) NOT NULL;
