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
  `Username` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Photo` VARCHAR(255) NOT NULL,
  `Bio` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idUsers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pinterestclone`.`saved`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinterestclone`.`saved` (
  `idsaved` INT NOT NULL AUTO_INCREMENT,
  `Users_idUsers` INT NOT NULL,
  PRIMARY KEY (`idsaved`),
  INDEX `fk_saved_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_saved_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `pinterestclone`.`users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pinterestclone`.`postes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinterestclone`.`postes` (
  `idpostes` INT NOT NULL AUTO_INCREMENT,
  `Users_idUsers` INT NOT NULL,
  `Description` VARCHAR(255) NOT NULL,
  `Categories` VARCHAR(45) NOT NULL,
  `saved_idsaved` INT NOT NULL,
  `photo` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`idpostes`),
  INDEX `fk_postes_Users_idx` (`Users_idUsers` ASC) VISIBLE,
  INDEX `fk_postes_saved1_idx` (`saved_idsaved` ASC) VISIBLE,
  CONSTRAINT `fk_postes_saved1`
    FOREIGN KEY (`saved_idsaved`)
    REFERENCES `pinterestclone`.`saved` (`idsaved`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_postes_Users`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `pinterestclone`.`users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pinterestclone`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinterestclone`.`comment` (
  `idcomment` INT NOT NULL AUTO_INCREMENT,
  `postes_idpostes` INT NOT NULL,
  `Users_idUsers` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idcomment`),
  INDEX `fk_comment_postes1_idx` (`postes_idpostes` ASC) VISIBLE,
  INDEX `fk_comment_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_comment_postes1`
    FOREIGN KEY (`postes_idpostes`)
    REFERENCES `pinterestclone`.`postes` (`idpostes`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_comment_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `pinterestclone`.`users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
