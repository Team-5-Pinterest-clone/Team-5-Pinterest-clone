-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pinterestclone
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pinterestclone
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pinterestclone` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `pinterestclone` ;

-- -----------------------------------------------------
-- Table `pinterestclone`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinterestclone`.`users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `photo` LONGTEXT NULL DEFAULT NULL,
  `bio` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idUsers`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pinterestclone`.`saved`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinterestclone`.`saved` (
  `idsaved` INT NOT NULL AUTO_INCREMENT,
  `users_idUsers` INT NOT NULL,
  `idposts` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idsaved`),
  INDEX `fk_saved_Users1_idx` (`users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_saved_Users1`
    FOREIGN KEY (`users_idUsers`)
    REFERENCES `pinterestclone`.`users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pinterestclone`.`postes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinterestclone`.`postes` (
  `idpostes` INT NOT NULL AUTO_INCREMENT,
  `users_idUsers` INT NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `categories` VARCHAR(45) NOT NULL,
  `saved_idsaved` INT NULL DEFAULT NULL,
  `photo` LONGTEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `link` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idpostes`),
  INDEX `fk_postes_Users_idx` (`users_idUsers` ASC) VISIBLE,
  INDEX `fk_postes_saved1_idx` (`saved_idsaved` ASC) VISIBLE,
  CONSTRAINT `fk_postes_saved1`
    FOREIGN KEY (`saved_idsaved`)
    REFERENCES `pinterestclone`.`saved` (`idsaved`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_postes_Users`
    FOREIGN KEY (`users_idUsers`)
    REFERENCES `pinterestclone`.`users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pinterestclone`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinterestclone`.`comment` (
  `idcomment` INT NOT NULL AUTO_INCREMENT,
  `postes_idpostes` INT NOT NULL,
  `users_idUsers` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `comment_like` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idcomment`),
  INDEX `fk_comment_postes1_idx` (`postes_idpostes` ASC) VISIBLE,
  INDEX `fk_comment_Users1_idx` (`users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_comment_postes1`
    FOREIGN KEY (`postes_idpostes`)
    REFERENCES `pinterestclone`.`postes` (`idpostes`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_comment_Users1`
    FOREIGN KEY (`users_idUsers`)
    REFERENCES `pinterestclone`.`users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

