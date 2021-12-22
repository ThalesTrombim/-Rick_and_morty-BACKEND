-- CreateTable
CREATE TABLE `planets` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `dimension` VARCHAR(191) NULL,
    `first_episode` VARCHAR(191) NULL,
    `some_habitants` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
