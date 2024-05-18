-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2024 at 09:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `freedom_within`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `time_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `message` longtext NOT NULL,
  `appointment_type` varchar(255) NOT NULL,
  `confirmation` tinyint(1) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `patient_id`, `date`, `time_id`, `user_id`, `service_id`, `message`, `appointment_type`, `confirmation`, `done`, `created_at`, `updated_at`) VALUES
(2, 4, '2024-01-12', 23, 1, 1, 'Python Programming', 'offline', 1, 1, '2024-01-11 11:03:36', '2024-01-12 10:14:05'),
(4, 4, '2024-01-13', 30, 1, 1, 'Sick', 'offline', 0, 0, '2024-01-11 22:40:35', '2024-01-12 09:37:22'),
(5, 6, '2024-01-13', 24, 3, 1, 'AaaaaaaaaaaaaaaaA', 'offline', 1, 0, '2024-01-12 02:27:46', '2024-01-12 02:27:46'),
(6, 6, '2024-01-14', 30, 1, 1, 'qwdawdawdfawd', 'offline', 0, 0, '2024-01-12 02:29:40', '2024-01-12 02:29:40'),
(7, 7, '2024-01-14', 28, 1, 1, 'Something', 'online', 0, 0, '2024-01-12 10:04:12', '2024-01-12 10:04:12'),
(8, 7, '2024-01-16', 27, 3, 2, 'Something', 'offline', 0, 0, '2024-01-12 10:04:53', '2024-01-12 10:04:53'),
(9, 4, '2024-01-12', 24, 1, 1, 'aoisdnboiuawdb', 'online', 1, 1, '2024-01-12 10:16:54', '2024-01-12 10:17:47'),
(10, 4, '2024-01-12', 27, 1, 1, 'aoisdnboiuawdbaoisdnvoianbsv', 'offline', 1, 0, '2024-01-12 10:17:05', '2024-01-12 10:17:34'),
(11, 4, '2024-01-12', 30, 1, 1, 'aoisdnboiuawdbaoisdnvoianbsv', 'online', 1, 0, '2024-01-12 10:17:14', '2024-01-12 10:17:36'),
(12, 8, '2024-01-19', 28, 1, 2, 'adubvosaidvboydsivbaiudv', 'online', 1, 0, '2024-01-18 03:52:19', '2024-01-18 03:52:33'),
(24, 20, '2024-04-19', 27, 3, 1, 'wdasdwd', 'offline', 0, 0, '2024-02-26 06:48:55', '2024-02-26 06:49:31'),
(25, 21, '2024-05-16', 27, 4, 1, '1654984', 'online', 1, 0, '2024-05-15 12:18:19', '2024-05-15 12:18:50'),
(26, 21, '2024-05-16', 28, 4, 1, 'dawdawd', 'offline', 1, 0, '2024-05-15 12:22:58', '2024-05-15 12:23:04');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `contact` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `user_id`, `contact`, `created_at`, `updated_at`) VALUES
(1, 1, '01902296896', '2024-01-11 07:38:43', '2024-01-15 03:19:38'),
(2, 1, '01568081950', '2024-01-11 07:38:43', '2024-01-15 03:19:47'),
(3, 2, '321989879', '2024-01-11 07:42:09', '2024-01-11 07:42:09'),
(4, 3, '14785236987', '2024-01-11 07:42:51', '2024-01-11 07:42:51'),
(5, 4, '3216541987', '2024-05-15 12:15:07', '2024-05-15 12:15:07'),
(6, 4, '321231654', '2024-05-15 12:15:07', '2024-05-15 12:15:07');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `date` date NOT NULL,
  `time` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `description`, `date`, `time`, `created_at`, `updated_at`) VALUES
(2, 'Conference', 'A conference about mental health', '2024-01-21', '5:30 pm', '2024-01-11 23:25:57', '2024-01-11 23:25:57'),
(3, 'New Event', 'Adawdawdawd', '2024-03-31', '5:15 pm', '2024-03-17 01:41:15', '2024-03-17 01:41:15'),
(4, 'New Event', 'Adawdawdawd', '2024-03-31', '5:15 pm', '2024-03-17 01:41:23', '2024-03-17 01:41:23');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `homes`
--

CREATE TABLE `homes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` longtext NOT NULL,
  `description` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `path` longtext NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `service_id` bigint(20) UNSIGNED DEFAULT NULL,
  `event_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `path`, `user_id`, `service_id`, `event_id`, `created_at`, `updated_at`) VALUES
(1, 'http://localhost:8000/images/1704980323-jpg', 1, NULL, NULL, '2024-01-11 07:38:43', '2024-01-11 07:38:43'),
(2, 'http://localhost:8000/images/1704980529-jpg', 2, NULL, NULL, '2024-01-11 07:42:09', '2024-01-11 07:42:09'),
(3, 'http://localhost:8000/images/1704980571-jpg', 3, NULL, NULL, '2024-01-11 07:42:51', '2024-01-11 07:42:51'),
(4, 'http://localhost:8000/images/1704981398-.png', NULL, 1, NULL, '2024-01-11 07:56:38', '2024-01-11 07:56:38'),
(5, 'http://localhost:8000/images/1704981411-.jpg', NULL, 2, NULL, '2024-01-11 07:56:51', '2024-01-11 07:56:51'),
(6, 'http://localhost:8000/images/1705037157-Conference.jpg', NULL, NULL, 2, '2024-01-11 23:25:57', '2024-01-11 23:25:57'),
(7, 'http://localhost:8000/images/1710661283-New Event.jpg', NULL, NULL, 4, '2024-03-17 01:41:23', '2024-03-17 01:41:23'),
(8, 'http://localhost:8000/images/1715796907-png', 4, NULL, NULL, '2024-05-15 12:15:07', '2024-05-15 12:15:07');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_01_09_151042_create_homes_table', 1),
(6, '2024_01_09_151149_create_services_table', 1),
(7, '2024_01_09_151444_create_contacts_table', 1),
(8, '2024_01_09_152122_create_events_table', 1),
(9, '2024_01_09_152151_create_organizations_table', 1),
(10, '2024_01_09_152418_create_images_table', 1),
(11, '2024_01_10_143744_create_times_table', 1),
(12, '2024_01_11_121216_create_patients_table', 1),
(13, '2024_01_11_151852_create_appointments_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` longtext NOT NULL,
  `maplink` longtext NOT NULL,
  `contact` varchar(15) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `email`, `contact`, `gender`, `age`, `created_at`, `updated_at`) VALUES
(4, 'Rakin', 'Rayean@Rakin', '01921386145', 'male', 33, '2024-01-11 11:03:36', '2024-01-11 11:03:36'),
(5, 'Ethan Hunt', 'ethan@hunt', '32165498798', 'male', 65, '2024-01-11 11:24:21', '2024-01-11 11:24:21'),
(6, 'Maisa', 'maisa@kabir', '32165497', 'female', 12, '2024-01-12 02:27:46', '2024-01-12 02:27:46'),
(7, 'Zabir', 'za@bir', '321654987987', 'male', 22, '2024-01-12 10:04:12', '2024-01-12 10:04:12'),
(8, 'Ali', 'baba@ali', '321654897225', 'male', 52, '2024-01-18 03:52:19', '2024-01-18 03:52:19'),
(20, 'Hasan', 'has@an', '1234567899', 'male', 19, '2024-02-26 06:48:55', '2024-02-26 06:48:55'),
(21, 'Billu', 'billu@cat', '23165498', 'female', 60, '2024-05-15 12:18:19', '2024-05-15 12:18:19');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'token', '1ceecece24403d5a8df4e334875e4dd0d303bac477c133a95b21d694aeaee36a', '[\"*\"]', '2024-01-11 07:47:51', NULL, '2024-01-11 07:43:10', '2024-01-11 07:47:51'),
(2, 'App\\Models\\User', 2, 'token', '87959624d32e33bc3678ab74c9295177bb6ab6d92d182eed13f209bbb4e9a478', '[\"*\"]', '2024-01-11 07:48:30', NULL, '2024-01-11 07:48:19', '2024-01-11 07:48:30'),
(3, 'App\\Models\\User', 3, 'token', 'e8aefc0aded750fb4b10dc1510693b9335b04218272324940d92bae62ed39267', '[\"*\"]', '2024-01-11 07:48:48', NULL, '2024-01-11 07:48:41', '2024-01-11 07:48:48'),
(4, 'App\\Models\\User', 1, 'token', '97c714fe57d6ed2dafe2a46ee767d52a54bfda1f40af977402d630529faaeeaf', '[\"*\"]', '2024-01-12 00:05:30', NULL, '2024-01-12 00:04:59', '2024-01-12 00:05:30'),
(5, 'App\\Models\\User', 1, 'token', '202ff85bf56f63d71c36f6969a59fd3d955d690b5f44d56b3ff59823fe727c1a', '[\"*\"]', NULL, NULL, '2024-01-12 00:05:39', '2024-01-12 00:05:39'),
(6, 'App\\Models\\User', 1, 'token', '880942bd9b16059ac2dd96696709f78ddced9ff8b7298c91e82cf8ac9b18437c', '[\"*\"]', NULL, NULL, '2024-01-12 00:06:02', '2024-01-12 00:06:02'),
(7, 'App\\Models\\User', 1, 'token', '1ecc79ab68359dd2fa7aecb37aa79ada9593e9d51b1969d8ae420e490f9a6de8', '[\"*\"]', '2024-01-12 00:14:38', NULL, '2024-01-12 00:06:43', '2024-01-12 00:14:38'),
(8, 'App\\Models\\User', 1, 'token', '40b1523b1f45220d8c02f8e8405bdfe4c21e61ac29283c86951beeb11ad2d16b', '[\"*\"]', '2024-01-12 00:46:13', NULL, '2024-01-12 00:15:04', '2024-01-12 00:46:13'),
(9, 'App\\Models\\User', 3, 'token', '9e13b228d48ad379d1354078d117a363cc3275924c3ae527ea0b34698e82c0e6', '[\"*\"]', '2024-01-12 00:46:30', NULL, '2024-01-12 00:46:21', '2024-01-12 00:46:30'),
(10, 'App\\Models\\User', 1, 'token', 'a82962191a8e33b0125b36ae7f1076c9f3fbcb8b254ea207d8034472e6304961', '[\"*\"]', '2024-01-12 00:48:29', NULL, '2024-01-12 00:46:39', '2024-01-12 00:48:29'),
(11, 'App\\Models\\User', 3, 'token', '2fe5be37da43acbb8ac5472b96e11f5f1b76f6fc4b697fb61999e875055563a1', '[\"*\"]', '2024-01-12 01:01:56', NULL, '2024-01-12 00:48:37', '2024-01-12 01:01:56'),
(12, 'App\\Models\\User', 1, 'token', '084e7da55ecdeca784b85e6c227fd6e0e0ee5d72f7af5adcc2a2712272c4705a', '[\"*\"]', '2024-01-12 01:31:49', NULL, '2024-01-12 01:02:07', '2024-01-12 01:31:49'),
(13, 'App\\Models\\User', 3, 'token', 'ae289e17574a1485b007c1aca3c5bf38a4d8cafa342f2ba6c0b7e2e42ebf0dcd', '[\"*\"]', '2024-01-12 01:31:57', NULL, '2024-01-12 01:31:55', '2024-01-12 01:31:57'),
(14, 'App\\Models\\User', 2, 'token', '2ce4233bf1ff07a88e582dd548c84059c731dcb8a14a5c55f6ed67cfba8af31b', '[\"*\"]', '2024-01-12 01:32:09', NULL, '2024-01-12 01:32:02', '2024-01-12 01:32:09'),
(15, 'App\\Models\\User', 3, 'token', 'd9854b0a2432d5c601f3f71bef466dd50b6a6a20fe4d553a6b64fc7fc7a3944e', '[\"*\"]', '2024-01-12 01:43:56', NULL, '2024-01-12 01:32:15', '2024-01-12 01:43:56'),
(16, 'App\\Models\\User', 1, 'token', '3309ed716c3624bb1b6fafdb73ab017198b8f95c68ddd121a2ddf497b0481bfa', '[\"*\"]', '2024-01-12 02:02:25', NULL, '2024-01-12 01:44:03', '2024-01-12 02:02:25'),
(17, 'App\\Models\\User', 3, 'token', 'df38952b0335103bd7e325e999687a1998f4898085361718795d56ac5e349f11', '[\"*\"]', '2024-01-12 02:08:01', NULL, '2024-01-12 02:02:34', '2024-01-12 02:08:01'),
(18, 'App\\Models\\User', 1, 'token', '05f2fba62e46ca0595544ef02251819a1389cc73aa185e5c6df9e3198ea936f3', '[\"*\"]', '2024-01-12 02:23:44', NULL, '2024-01-12 02:08:07', '2024-01-12 02:23:44'),
(19, 'App\\Models\\User', 1, 'token', '7e944d0afda3d754658dd1a12e73c6602300bda38e101b93173c34406aa4181e', '[\"*\"]', '2024-01-12 02:31:44', NULL, '2024-01-12 02:30:55', '2024-01-12 02:31:44'),
(20, 'App\\Models\\User', 3, 'token', 'a3eb5e1f13a923df43fe980a0ec7362fa790a30ebf5d7fb6f7ff4e1784a66969', '[\"*\"]', '2024-01-12 02:33:31', NULL, '2024-01-12 02:31:51', '2024-01-12 02:33:31'),
(21, 'App\\Models\\User', 2, 'token', '8e75b5908a89b0b0b10346ed5531dbcf638b185d62e1caba60f9eda40e3bc1ad', '[\"*\"]', '2024-01-12 02:34:18', NULL, '2024-01-12 02:33:37', '2024-01-12 02:34:18'),
(22, 'App\\Models\\User', 1, 'token', '92b5d1627ae3565f1735118c3e07db18f553b943d58dde26cff7a6763e947361', '[\"*\"]', '2024-01-12 10:02:57', NULL, '2024-01-12 08:57:59', '2024-01-12 10:02:57'),
(23, 'App\\Models\\User', 1, 'token', 'b76525b6ded667a814fbd7f922ddd1d5dafab7b55e75dbb06b9a62d1c3f267d9', '[\"*\"]', '2024-01-12 10:17:48', NULL, '2024-01-12 10:05:11', '2024-01-12 10:17:48'),
(24, 'App\\Models\\User', 1, 'token', 'c8d32e6237c1e16d44690283c6c422729d2a8fe2a4fe2a37bc8e6445982cf19a', '[\"*\"]', '2024-01-14 00:49:51', NULL, '2024-01-14 00:36:48', '2024-01-14 00:49:51'),
(25, 'App\\Models\\User', 1, 'token', 'ec15cedf38eae8c4e88bb435e33e8ad56858bf66affe805451faab9bb0eea56b', '[\"*\"]', '2024-01-14 00:53:54', NULL, '2024-01-14 00:53:38', '2024-01-14 00:53:54'),
(26, 'App\\Models\\User', 1, 'token', 'f87175e316a29cc51f1da1970f143266237dceb085129ebbcd53fd907a2723b9', '[\"*\"]', '2024-01-15 03:17:05', NULL, '2024-01-15 02:43:56', '2024-01-15 03:17:05'),
(27, 'App\\Models\\User', 1, 'token', 'bc4686017de39d157613d2e3431b3eddd12576970cc0acf6783dbc90fdb6165d', '[\"*\"]', '2024-01-15 03:22:02', NULL, '2024-01-15 03:17:17', '2024-01-15 03:22:02'),
(28, 'App\\Models\\User', 1, 'token', '49de719c24d0cd7a6ba44c3bfee491fac66493628a5e0505da5192c6ef44b027', '[\"*\"]', '2024-01-15 03:22:25', NULL, '2024-01-15 03:22:22', '2024-01-15 03:22:25'),
(29, 'App\\Models\\User', 3, 'token', '45867722977c0de68c7c2db78ccaf4640c43810603984e6619a16a944d2dc99e', '[\"*\"]', '2024-01-15 03:23:01', NULL, '2024-01-15 03:22:33', '2024-01-15 03:23:01'),
(30, 'App\\Models\\User', 3, 'token', '35467d16b677ebb872e20a4a30649b5436c34f268c93c25e788dd3e239e73612', '[\"*\"]', NULL, NULL, '2024-01-15 03:32:23', '2024-01-15 03:32:23'),
(31, 'App\\Models\\User', 3, 'token', '93ee9fd3933918f063c3cb2f4c685d46b2e4d6f77d5b3320d39e09148aadecfd', '[\"*\"]', NULL, NULL, '2024-01-15 03:32:27', '2024-01-15 03:32:27'),
(32, 'App\\Models\\User', 3, 'token', '950a25c4ab0d0b1261012dfdbeadaca10f680c4294785439555ce12341744fbb', '[\"*\"]', NULL, NULL, '2024-01-15 03:32:36', '2024-01-15 03:32:36'),
(33, 'App\\Models\\User', 3, 'token', '64b114ff9b0d4e42e85edd918d41ea99c8e37c259eec25248c4dc7736c040bc4', '[\"*\"]', NULL, NULL, '2024-01-15 03:32:36', '2024-01-15 03:32:36'),
(34, 'App\\Models\\User', 3, 'token', 'e2c8384926cfd676bcad0db536cb5bbd74b75cbbb0f5f275c488d360489877ed', '[\"*\"]', NULL, NULL, '2024-01-15 03:32:46', '2024-01-15 03:32:46'),
(35, 'App\\Models\\User', 3, 'token', '4c59e9251e94778377f13e4a1521e1719859d09263a74d069cae6079d4acb97a', '[\"*\"]', NULL, NULL, '2024-01-15 03:32:47', '2024-01-15 03:32:47'),
(36, 'App\\Models\\User', 3, 'token', '841747fa17425f3c5bbd3586914d4a8a1c0d4e1510e2b1c011b63815aeca78f5', '[\"*\"]', NULL, NULL, '2024-01-15 03:32:47', '2024-01-15 03:32:47'),
(37, 'App\\Models\\User', 3, 'token', '86ab33661aba7dd6333d221a67a483fe05baf9c2a451289322344414ffcc9270', '[\"*\"]', NULL, NULL, '2024-01-15 03:32:48', '2024-01-15 03:32:48'),
(38, 'App\\Models\\User', 3, 'token', 'fb34dfe94f223035e469d47258b8b1e557916118a895811d69af053d384bb03c', '[\"*\"]', '2024-01-15 03:33:15', NULL, '2024-01-15 03:33:11', '2024-01-15 03:33:15'),
(39, 'App\\Models\\User', 3, 'token', '507eb772fc628b301cac063f1849ddcd196b84db1822bd34991880afe307fc90', '[\"*\"]', '2024-01-15 10:00:22', NULL, '2024-01-15 03:33:38', '2024-01-15 10:00:22'),
(40, 'App\\Models\\User', 1, 'token', 'f72d154d9ae9cb73c8ccd0806a7d4f0982c505d9dc9bb05e05127c08e2efa4db', '[\"*\"]', '2024-01-15 10:33:51', NULL, '2024-01-15 10:00:31', '2024-01-15 10:33:51'),
(41, 'App\\Models\\User', 3, 'token', 'aa217c775feb8bba43d327057f3943e72bf37a84c85f1f70815103436fa567be', '[\"*\"]', '2024-01-15 10:35:02', NULL, '2024-01-15 10:33:58', '2024-01-15 10:35:02'),
(42, 'App\\Models\\User', 1, 'token', '15fe6a9eaa508bda83259e91002948b95cd3ed9626f7b36a0844006ee30ae758', '[\"*\"]', '2024-01-15 10:42:49', NULL, '2024-01-15 10:35:09', '2024-01-15 10:42:49'),
(43, 'App\\Models\\User', 3, 'token', '3684d200ba86711f7ec76a68213cd7c57a3dfe9fa8bf3bac56ef11e6fb13f6cd', '[\"*\"]', '2024-01-15 10:43:14', NULL, '2024-01-15 10:43:04', '2024-01-15 10:43:14'),
(44, 'App\\Models\\User', 1, 'token', 'c18ab4d23e5f6fa26c9eb4dfec36edc851a140a432780eabfbc8bbb803ef6157', '[\"*\"]', '2024-01-15 10:51:06', NULL, '2024-01-15 10:43:20', '2024-01-15 10:51:06'),
(45, 'App\\Models\\User', 3, 'token', '2f139993671fd096f1a08ed4db82657c4957451e462d6f2cec6d2a8d39cd00a7', '[\"*\"]', '2024-01-15 10:51:27', NULL, '2024-01-15 10:51:12', '2024-01-15 10:51:27'),
(46, 'App\\Models\\User', 1, 'token', '029bf224d61bc64bd9f4871f7199c34241e2db0d4ec539607935da38fb945728', '[\"*\"]', '2024-01-15 10:51:40', NULL, '2024-01-15 10:51:33', '2024-01-15 10:51:40'),
(47, 'App\\Models\\User', 2, 'token', 'f04cf440fff8970e4ef63f9b8e6581aa6671c529e732951a0221b2ed2a24c21c', '[\"*\"]', '2024-01-15 10:52:06', NULL, '2024-01-15 10:51:51', '2024-01-15 10:52:06'),
(48, 'App\\Models\\User', 1, 'token', '4282e1305cf9b6238b01b88f445b39f4d0f2f0a2d6a7f515e86b090042fc46f9', '[\"*\"]', '2024-01-15 11:17:54', NULL, '2024-01-15 10:52:13', '2024-01-15 11:17:54'),
(49, 'App\\Models\\User', 1, 'token', '5f33d6bf704aa19032b42e02630fc09f13d2e852803fd8d7d02f02d6bc70c8c6', '[\"*\"]', '2024-01-19 00:12:05', NULL, '2024-01-18 02:07:38', '2024-01-19 00:12:05'),
(50, 'App\\Models\\User', 1, 'token', 'b10301476c709af728c9cc91b6e3138bbedf67ae2fe9aa47e9bbf995182293f2', '[\"*\"]', '2024-01-19 00:12:58', NULL, '2024-01-19 00:12:19', '2024-01-19 00:12:58'),
(51, 'App\\Models\\User', 3, 'token', '8beb6703963150064bcb024113e023b55213736cf92d211316e2db9cb1397a17', '[\"*\"]', '2024-01-19 00:56:48', NULL, '2024-01-19 00:13:11', '2024-01-19 00:56:48'),
(52, 'App\\Models\\User', 1, 'token', 'afdcbe6f57c7034e495bfdce362780b8b851d47bcc450336ba49175115a58bf1', '[\"*\"]', '2024-01-19 02:49:08', NULL, '2024-01-19 00:56:57', '2024-01-19 02:49:08'),
(53, 'App\\Models\\User', 3, 'token', 'bc4c8fb8adae804821ff8b08c2851da37e4f65bc75d182e45c3568e178539930', '[\"*\"]', '2024-02-26 06:48:06', NULL, '2024-02-26 06:47:24', '2024-02-26 06:48:06'),
(54, 'App\\Models\\User', 3, 'token', '3f228ac226cd3d4e63f49849d38c9319506e902e9b5fc39c94f5184283e07ba7', '[\"*\"]', '2024-02-26 06:50:49', NULL, '2024-02-26 06:49:17', '2024-02-26 06:50:49'),
(55, 'App\\Models\\User', 2, 'token', '4d594cab1cb5947334f45a1e9e50b10ca0498aaac78365039a63d3c59309b7b8', '[\"*\"]', '2024-03-17 00:32:34', NULL, '2024-03-17 00:30:45', '2024-03-17 00:32:34'),
(56, 'App\\Models\\User', 1, 'token', '145dd8c3a0fb62ec3111175d1bff048e546e63f9f3bde7f9825eb9477d8b7ca3', '[\"*\"]', '2024-03-17 00:33:14', NULL, '2024-03-17 00:32:49', '2024-03-17 00:33:14'),
(57, 'App\\Models\\User', 2, 'token', 'd44b01c6d6e7cf686300d32ca756c8dbf91d789b2965de1bb0d8c75479b8bb8d', '[\"*\"]', '2024-03-17 01:45:15', NULL, '2024-03-17 01:40:37', '2024-03-17 01:45:15'),
(58, 'App\\Models\\User', 4, 'token', 'bf55280d24fcf38f641832ee9aa1559d415a8fbe625f0d927b387844d320e4dc', '[\"*\"]', '2024-05-15 12:17:15', NULL, '2024-05-15 12:16:09', '2024-05-15 12:17:15'),
(59, 'App\\Models\\User', 4, 'token', '3a1606cea0b7ba079433fdd33b354b6e1af0c43c56c94d08052e7b093c3075be', '[\"*\"]', '2024-05-15 12:20:50', NULL, '2024-05-15 12:18:40', '2024-05-15 12:20:50'),
(60, 'App\\Models\\User', 4, 'token', 'c358a0800e8e6a1d719c1e3345f5a0a52045f5507c47123312f6feba4d7f02c5', '[\"*\"]', '2024-05-15 12:26:46', NULL, '2024-05-15 12:21:26', '2024-05-15 12:26:46');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `type`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Individual', 'AaaaaaaaaaaaaA', '2024-01-11 07:56:38', '2024-01-11 07:56:38'),
(2, 'Couple', 'AaaaaaaaaaaaA', '2024-01-11 07:56:51', '2024-01-11 07:56:51');

-- --------------------------------------------------------

--
-- Table structure for table `times`
--

CREATE TABLE `times` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `time_slot` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `times`
--

INSERT INTO `times` (`id`, `time_slot`, `created_at`, `updated_at`) VALUES
(22, '10:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(23, '11:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(24, '12:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(25, '13:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(26, '14:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(27, '15:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(28, '16:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(29, '17:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(30, '18:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(31, '19:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44'),
(32, '20:00', '2024-01-11 09:33:44', '2024-01-11 09:33:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `therapist_status` tinyint(1) NOT NULL,
  `admin_access` tinyint(1) NOT NULL,
  `description` longtext NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `therapist_status`, `admin_access`, `description`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Tazrian Hossain', 'taz@rian', '$2y$12$Q2RuyuNYwj9s63sPfkAXhegdrQqXQKUfqbYPjp/dUKwUMESqN4uAu', 1, 1, 'Professor of procrastination. Master of Spiraling downward. Can provide emotional support', NULL, '2024-01-11 07:38:43', '2024-01-15 10:58:34'),
(2, 'Alibaba', 'ali@baba', '$2y$12$02Mn9L4lDuJPEXh6b2rTwuzeIA7ilX9htHuSIOoYzfXqZxMZlyAje', 0, 1, 'AaaaaaaaaaaaaaaaaaA', NULL, '2024-01-11 07:42:09', '2024-01-11 07:42:09'),
(3, 'Nafisa', 'naf@isa', '$2y$12$igkRBiZd3egAQGXO2sRlv.QrY/9pn/4oFrS3Izvv86p89jruQjuEa', 1, 0, 'AaaaaaaaaaaaaaaaaaaaA', NULL, '2024-01-11 07:42:51', '2024-01-15 10:55:06'),
(4, 'Promu', 'dianbo@cat', '$2y$12$fug59RbDZy3VRDFt5eodzubk1.k/S3s3Nk2RYSsNSyRf.8Xx3WxvG', 1, 1, 'Billu', NULL, '2024-05-15 12:15:07', '2024-05-15 12:15:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointments_patient_id_foreign` (`patient_id`),
  ADD KEY `appointments_time_id_foreign` (`time_id`),
  ADD KEY `appointments_user_id_foreign` (`user_id`),
  ADD KEY `appointments_service_id_foreign` (`service_id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contacts_user_id_foreign` (`user_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `homes`
--
ALTER TABLE `homes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_user_id_foreign` (`user_id`),
  ADD KEY `images_service_id_foreign` (`service_id`),
  ADD KEY `images_event_id_foreign` (`event_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `times`
--
ALTER TABLE `times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `homes`
--
ALTER TABLE `homes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `times`
--
ALTER TABLE `times`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_time_id_foreign` FOREIGN KEY (`time_id`) REFERENCES `times` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `images_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `images_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
