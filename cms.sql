/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : cms

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 21/05/2022 13:29:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `role` int NOT NULL DEFAULT '3',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of account
-- ----------------------------
BEGIN;
INSERT INTO `account` (`id`, `user`, `password`, `avatar`, `update_time`, `create_time`, `role`) VALUES (13, 'superAdmin', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', NULL, '2022-05-21 10:01:41', '2022-05-21 10:01:41', 3);
INSERT INTO `account` (`id`, `user`, `password`, `avatar`, `update_time`, `create_time`, `role`) VALUES (14, 'vastio', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', NULL, '2022-05-21 12:48:42', '2022-05-21 12:48:42', 3);
COMMIT;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` varchar(200) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `account` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
BEGIN;
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (2, 13, '天朗气清', '天朗气清, 风和日丽！', '2022-05-21 10:52:33', '2022-05-21 10:52:33');
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (3, 13, '天朗气清', '天朗气清, 风和日丽！', '2022-05-21 10:52:37', '2022-05-21 10:52:37');
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (4, 13, '天朗气清', '天朗气清, 风和日丽！', '2022-05-21 10:56:55', '2022-05-21 10:56:55');
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (5, 13, '你好世界', '天朗气清, 风和日丽！', '2022-05-21 10:57:12', '2022-05-21 10:57:12');
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (6, 13, '好日子还在后面呢！', '天朗气清, 风和日丽！', '2022-05-21 10:57:38', '2022-05-21 10:57:38');
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (7, 13, '今天天气晴朗！', '天朗气清, 风和日丽！', '2022-05-21 10:58:15', '2022-05-21 10:58:15');
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (8, 13, '今天天气不错！', '天朗气清, 惠风和畅！', '2022-05-21 12:42:57', '2022-05-21 12:42:57');
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (9, 13, '枫叶', '枫叶好漂亮！', '2022-05-21 12:50:33', '2022-05-21 12:50:33');
INSERT INTO `comment` (`id`, `user_id`, `title`, `content`, `create_time`, `update_time`) VALUES (10, 14, '枫叶1', '枫叶好漂亮！1', '2022-05-21 12:51:48', '2022-05-21 12:51:48');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
