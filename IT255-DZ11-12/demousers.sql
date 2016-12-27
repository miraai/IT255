-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2016 at 03:40 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demousers`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE `korisnici` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `token` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`id`, `firstname`, `lastname`, `username`, `password`, `token`) VALUES
(33, 'Vuk', 'Vasić', 'vuk.vasic', '5a1001075d3205d010ef24413e6a1afd', '625b1b3197d81114d28339209a57ac29990bd27c'),
(44, 'Ajla', 'Dzekovic', 'ajla', 'ajla123', NULL),
(232, 'Ajla', 'Dzekovic', 'ajla', 'ajla123', NULL),
(233, 'sadsad', 'sada', 'adasd', 'c253d19ca7f88bcf4a72762305bed41f', '53888a7742681ab00d1cf44105001f60885169aa'),
(234, 'sadsdaads', 'dsasadsadsad', 'sdasdasdasda', '2be097616c31dc74552172545519ab6c', '40fa4deb0b317948866d3f9c1f143013775df058'),
(235, 'ajla', 'dzekovic', 'ajlaaa', 'c253d19ca7f88bcf4a72762305bed41f', '26b3691ef8b2533070a564f8e6c50a69ad9ee35c'),
(236, 'ajla', 'ajla', 'lelachan', 'c253d19ca7f88bcf4a72762305bed41f', 'abda5bf9a0602cb3256124774428bf82b103f9f4');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `roomname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `tv` int(11) DEFAULT NULL,
  `beds` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `roomname`, `tv`, `beds`) VALUES
(1, 'Primer', 1, 23),
(2, 'Soba 2', NULL, 10),
(3, 'sadsdaa', NULL, 123),
(4, 'sobica', 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=237;
--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
