-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: floorguidetv
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `floor` int(10) DEFAULT NULL,
  `room` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (77,'GL MANAGMENT d.o.o.',1,1),(78,'SCHAEFFLER SLOVENIJA d.o.o.',1,2),(79,'ELEKTROTEHNIŠKO DRUŠTVO',1,3),(80,'SVETOVALNO-TERAPEVTSKI CENTER',1,4),(81,'RAS CONTO S.P',1,5),(82,'UL d.o.o.',1,6),(83,'STORY d.o.o.',1,7),(84,'PRAVNO SVETOVANJE ZDRAVKO KRIŽMAN S.P',1,8),(85,'INICIJA d.o.o.',1,9),(86,'ZBORNICA ZA RAZVOJ PODJETNIKOV',1,10),(87,'ONITEX d.o.o.',1,11),(88,'T.A. BALKANIKA',2,1),(89,'FEKU d.o.o.',2,2),(90,'FIRAMA d.o.o.',2,3),(91,'ZEPHYRUS',2,4),(92,'VITOM - ŠTEFOK d.o.o.',2,15),(93,'BK NEPREMI?NINE',2,5),(94,'INTER NEPREMI?NINE',2,6),(95,'DATOR d.o.o.',2,7),(96,'BIDOVEC ZVEZDANA',2,8),(97,'I.S.B. - KRAJNC METOD d.o.o.',2,9),(98,'BAR OAZA s.p.',2,10),(99,'STUDIO APOLLINARIYA KOPRIVNIK',2,11),(100,'GRADBENIŠTVO PETELIN d.o.o.',2,12),(102,'LEVOR d.o.o.',2,13),(103,'SPIGRAD d.o.o.',2,14),(104,'ATELJE DIALOG',3,307),(105,'DVL d.o.o.',3,2),(108,'SYKOFIN d.o.o.',3,309),(109,'DAV?NA HIŠA ALFA OMEGA',3,311),(110,'NEW POWER ENERGY d.o.o.',3,311),(111,'ACENSOR, Andrej Cehtl s.p.',3,327),(112,'ZIP SOLUTIONS303',3,303),(113,'SIMONA KRAMBERGER s.p.',3,10),(114,'PLURIS d.d.',3,326),(115,'BERGHAUS d.o.o.',3,12),(116,'LINE d.o.o.',3,320),(118,'ACADEMIA d.o.o.',4,15),(119,'SOMNIA d.o.o.',4,1),(120,'GORJUP NATAŠA',4,14),(121,'SIMONA KLAN?NIK s.p.',3,304),(122,'JEZIKOVNI BIRO LINDI?',3,325),(123,'ML HIŠKA IMODOM s.p.',3,329);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-24 21:06:00
