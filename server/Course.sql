/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost::8088
Source Database       : Course

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-22 12:36:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `classid` int(255) NOT NULL AUTO_INCREMENT COMMENT 'PrimaryKey',
  `classname` varchar(255) NOT NULL COMMENT 'Class Name',
  `selectstudent` bigint(20) DEFAULT NULL COMMENT 'Select Student',
  `teacher` varchar(255) DEFAULT NULL COMMENT 'Teacher',
  `belong` varchar(255) NOT NULL COMMENT 'Time',
  `introduction` varchar(1000) DEFAULT NULL COMMENT 'Description',
  `type` varchar(255) DEFAULT NULL COMMENT 'Type',
  `classphoto` varchar(500) DEFAULT NULL COMMENT 'Photo Class',
  `createid` int(11) DEFAULT NULL,
  `display` varchar(255) DEFAULT '' COMMENT 'Display or UnDisplay',
  `see` varchar(255) DEFAULT NULL,
  `test` varchar(255) DEFAULT NULL,
  `offline` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`classid`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', 'GoLang', '325', 'S3', 's3Corp', 'The Go team recently announced the open source project Go Cloud, with portable Cloud APIs and tools for open cloud development. This post goes into more detail about Wire, a dependency injection tool provided with Go Cloud. ', 'Store', 'https://img4.mukewang.com/5a71255d0001400e06000338-240-135.jpg', '1', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('2', 'Java', '523', 'S3', 's3Corp', 'JavaJavaJavaJavaJavaJavaJavaJavaJava', '', 'https://img2.mukewang.com/szimg/5a405cbc000124ca05400300.jpg', '1', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('3', 'HTML', '210', 'S3', 's3Corp', 'HTMLHTMLHTMLHTMLHTML', 'Store', 'https://edu-image.nosdn.127.net/BD05AA0DE8545A5F805DD2ED4D179734.JPG?imageView&thumbnail=510y288&quality=100', '12', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('4', 'CSS', '400', 'S3', 's3Corp', 'CSS Is Customer For Web Style', '', 'https://img-ph-mirror.nosdn.127.net/HwlREKM0B8IHaWTTQLhvNw==/6608648723608705783.jpg?imageView&thumbnail=223x125&quality=100', '14', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('5', 'ReactJS', '420', 'S3', 's3Corp', 'jdhfjdshjfhsdjhsdfjhkmncbvxmnbncvnmwsdfasd', 'School', 'https://edu-image.nosdn.127.net/5F29CA4CCB5C0445116D93280C72FD97.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '2', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('6', 'ReactNative', '236', 'S3', 's3Corp', 'hjscjvhxckjhv,mxn sjxfhjkzxhcjkhasdjhaxc mzxbncmnzbnxkmcnakshjdasd', 'School', 'https://edu-image.nosdn.127.net/89A1B1D3E8C699D656DA3622635128A1.png?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '3', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('7', 'Python ', '300', 'S3', 's3Corp', 'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.', '', 'https://edu-image.nosdn.127.net/E168A15535FA40E9A6D24C044469C9C5.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '1', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('8', '.Net', '600', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', 'School', 'https://edu-image.nosdn.127.net/F2868411355DBFCC13F469A8FF4D9A3E.png?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '1', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('9', 'ASP.NET', '589', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', 'School', 'https://edu-image.nosdn.127.net/181019E7BC4138F6620BCF57B1DA5C18.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '14', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('10', 'Js', '498', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', 'School', 'https://edu-image.nosdn.127.net/5E2B6887C3CA31F6BCF14D40F23B519E.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '15', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('11', 'Wordpress', '789', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', 'All', 'https://edu-image.nosdn.127.net/821FF02EBD63421A183F6F4A41AAEEA0.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '16', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('12', 'Wordpress PUSH ', '689', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', 'Store', 'https://edu-image.nosdn.127.net/288647B04DED46F53F2154ABF422099B.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '10', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('13', 'HTML/CSS', '700', 'S3', 's3Corp', '', 'Store', 'https://edu-image.nosdn.127.net/3EB8E84951DE65606D631BB9245832D6.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '2', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('14', 'MYSQL', '688', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', '', 'https://edu-image.nosdn.127.net/71475203734C4CB2497A63BA9F3DFB68.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '3', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('15', 'PHP', '723', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', 'Store', 'https://edu-image.nosdn.127.net/4FB0D068069F58191EE72D9EF946CD21.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '4', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('16', 'HTML To PHP', '620', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', '', 'https://edu-image.nosdn.127.net/BDA29B3E611F218B1C0A0FB41E8B80E3.png?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '5', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('17', 'PTS', '325', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', '', 'https://edu-image.nosdn.127.net/DDFF89092027479DB7BAD24AADBADA20.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '6', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('18', 'PTS To HTML', '466', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', '', 'https://img-ph-mirror.nosdn.127.net/MJiCt_kmrbMevo0uFp_oTw==/2400981551359921669.jpg?imageView&thumbnail=223x125&quality=100', '7', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('19', 'PTS 1', '325', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', '', 'https://edu-image.nosdn.127.net/DDFF89092027479DB7BAD24AADBADA20.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '6', 'Yes', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('20', 'PTS To HTML 2', '466', 'S3', 's3Corp', '// You can edit this code!// Click here and start typing.package main', '', 'https://img-ph-mirror.nosdn.127.net/MJiCt_kmrbMevo0uFp_oTw==/2400981551359921669.jpg?imageView&thumbnail=223x125&quality=100', '7', 'Yes', '50%', '20%', '30%');
-- ----------------------------
-- Table structure for classchapter
-- ----------------------------
DROP TABLE IF EXISTS `classchapter`;
CREATE TABLE `classchapter` (
  `classid` int(11) NOT NULL COMMENT 'ClassID',
  `chapterid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ChapterID',
  `chaptername` varchar(255) DEFAULT NULL COMMENT 'ChapterName',
  `chapterorder` int(11) DEFAULT NULL COMMENT 'ChapterOrderBySTT',
  PRIMARY KEY (`chapterid`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classchapter
-- ----------------------------
INSERT INTO `classchapter` VALUES ('8', '16', 'zxczxczxc', '1');
INSERT INTO `classchapter` VALUES ('1', '14', 'asd', '1');
INSERT INTO `classchapter` VALUES ('1', '15', 'asdzxczx', '2');
INSERT INTO `classchapter` VALUES ('7', '17', 'zxczxczxc', '1');
INSERT INTO `classchapter` VALUES ('2', '18', 'zzxcvzxcvzxcv', '1');

-- ----------------------------
-- Table structure for classresources
-- ----------------------------
DROP TABLE IF EXISTS `classresources`;
CREATE TABLE `classresources` (
  `classid` int(11) NOT NULL COMMENT 'ClassID',
  `resources` int(11) DEFAULT NULL COMMENT 'FileReSource',
  PRIMARY KEY (`classid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classresources
-- ----------------------------
INSERT INTO `classresources` VALUES ('1', '0');

-- ----------------------------
-- Table structure for classsection
-- ----------------------------
DROP TABLE IF EXISTS `classsection`;
CREATE TABLE `classsection` (
  `classid` int(11) NOT NULL COMMENT 'ClassID',
  `chapterid` int(11) DEFAULT NULL COMMENT 'ChapterID',
  `sectionname` varchar(255) DEFAULT NULL COMMENT 'SectionName',
  `sectionvideo` varchar(255) DEFAULT NULL COMMENT 'SectionVideo',
  `sectionpdf` varchar(255) DEFAULT NULL COMMENT 'Sectionpdf',
  `classsectionid` int(11) NOT NULL AUTO_INCREMENT,
  `sectionorder` int(11) DEFAULT NULL,
  PRIMARY KEY (`classsectionid`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classsection
-- ----------------------------
INSERT INTO `classsection` VALUES ('1', '14', 'asdasdas', 'localhost:9093/uploads/1.mp4', 'localhost:9093/uploads/1.pdf', '21', '2');
INSERT INTO `classsection` VALUES ('1', '15', 'zxczxczxc', 'localhost:9093/uploads/1.mp4', 'localhost:9093/uploads/1.pdf', '22', '1');
INSERT INTO `classsection` VALUES ('2', '18', 'zxczxczxc', null, null, '23', '1');
INSERT INTO `classsection` VALUES ('1', '14', 'undefined', null, null, '24', '3');
INSERT INTO `classsection` VALUES ('1', '14', 'asdasd', null, null, '20', '1');
INSERT INTO `classsection` VALUES ('1', '12', '', null, null, '19', '3');
INSERT INTO `classsection` VALUES ('1', '14', 'undefined', 'uploads/Hy6w2_0az1525742693518.mp4', null, '25', '4');

-- ----------------------------
-- Table structure for classtype
-- ----------------------------
DROP TABLE IF EXISTS `classtype`;
CREATE TABLE `classtype` (
  `typeid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TypeID',
  `typename` varchar(255) NOT NULL COMMENT 'TypeName',
  `icon` varchar(255) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classtype
-- ----------------------------
INSERT INTO `classtype` VALUES ('14', 'CALCULATOR', 'calculator');
INSERT INTO `classtype` VALUES ('15', 'DATABASE', 'database');
INSERT INTO `classtype` VALUES ('16', 'HDD', 'hdd');

-- ----------------------------
-- Table structure for havetest
-- ----------------------------
DROP TABLE IF EXISTS `havetest`;
CREATE TABLE `havetest` (
  `classid` int(11) NOT NULL,
  `havetest` int(11) DEFAULT NULL,
  PRIMARY KEY (`classid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of havetest
-- ----------------------------

-- ----------------------------
-- Table structure for hotclass
-- ----------------------------
DROP TABLE IF EXISTS `hotclass`;
CREATE TABLE `hotclass` (
  `hotid` int(11) NOT NULL AUTO_INCREMENT,
  `classid` int(11) NOT NULL,
  PRIMARY KEY (`hotid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hotclass
-- ----------------------------
INSERT INTO `hotclass` VALUES ('1', '1');
INSERT INTO `hotclass` VALUES ('2', '2');
INSERT INTO `hotclass` VALUES ('3', '3');
INSERT INTO `hotclass` VALUES ('4', '4');
INSERT INTO `hotclass` VALUES ('5', '5');
INSERT INTO `hotclass` VALUES ('6', '6');
INSERT INTO `hotclass` VALUES ('7', '7');
INSERT INTO `hotclass` VALUES ('8', '8');

-- ----------------------------
-- Table structure for indeximg
-- ----------------------------
DROP TABLE IF EXISTS `indeximg`;
CREATE TABLE `indeximg` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ImageID',
  `picture` varchar(255) NOT NULL COMMENT 'URLImage',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indeximg
-- ----------------------------
INSERT INTO `indeximg` VALUES ('1', 'http://localhost:9093/1.jpg');
INSERT INTO `indeximg` VALUES ('2', 'http://localhost:9093/2.jpg');
INSERT INTO `indeximg` VALUES ('3', 'http://localhost:9093/3.jpg');
INSERT INTO `indeximg` VALUES ('4', 'http://localhost:9093/4.jpg');

-- ----------------------------
-- Table structure for jinpinclass
-- ----------------------------
DROP TABLE IF EXISTS `jinpinclass`;
CREATE TABLE `jinpinclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classid` int(11) NOT NULL,
  PRIMARY KEY (`id`,`classid`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jinpinclass
-- ----------------------------
INSERT INTO `jinpinclass` VALUES ('5', '31');
INSERT INTO `jinpinclass` VALUES ('6', '32');
INSERT INTO `jinpinclass` VALUES ('7', '1');
INSERT INTO `jinpinclass` VALUES ('8', '3');
INSERT INTO `jinpinclass` VALUES ('9', '10');
INSERT INTO `jinpinclass` VALUES ('10', '13');
INSERT INTO `jinpinclass` VALUES ('11', '12');
INSERT INTO `jinpinclass` VALUES ('12', '15');

-- ----------------------------
-- Table structure for julinclass
-- ----------------------------
DROP TABLE IF EXISTS `julinclass`;
CREATE TABLE `julinclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classid` int(11) NOT NULL,
  PRIMARY KEY (`id`,`classid`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of julinclass
-- ----------------------------
INSERT INTO `julinclass` VALUES ('8', '31');
INSERT INTO `julinclass` VALUES ('9', '1');
INSERT INTO `julinclass` VALUES ('10', '11');
INSERT INTO `julinclass` VALUES ('11', '8');
INSERT INTO `julinclass` VALUES ('12', '10');
INSERT INTO `julinclass` VALUES ('13', '13');
INSERT INTO `julinclass` VALUES ('14', '15');


-- ----------------------------
-- Table structure for schoolclass
-- ----------------------------
DROP TABLE IF EXISTS `schoolclass`;
CREATE TABLE `schoolclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classid` int(11) NOT NULL,
  PRIMARY KEY (`id`,`classid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of schoolclass
-- ----------------------------
INSERT INTO `schoolclass` VALUES ('5', '10');
INSERT INTO `schoolclass` VALUES ('6', '9');
INSERT INTO `schoolclass` VALUES ('7', '8');
INSERT INTO `schoolclass` VALUES ('8', '6');
INSERT INTO `schoolclass` VALUES ('9', '5');

-- ----------------------------
-- Table structure for seeclass
-- ----------------------------
DROP TABLE IF EXISTS `seeclass`;
CREATE TABLE `seeclass` (
  `classid` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sectionid` int(11) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `pdf` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of seeclass
-- ----------------------------
INSERT INTO `seeclass` VALUES ('1', '19', '22', '', 'Yes', '3');
INSERT INTO `seeclass` VALUES ('1', '18', '25', 'Yes', '', '3');
INSERT INTO `seeclass` VALUES ('1', '17', '21', 'Yes', 'Yes', '3');
INSERT INTO `seeclass` VALUES ('1', '16', '21', 'Yes', '', '1');

-- ----------------------------
-- Table structure for selectclass
-- ----------------------------
DROP TABLE IF EXISTS `selectclass`;
CREATE TABLE `selectclass` (
  `selectid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Selectid',
  `userid` int(11) NOT NULL COMMENT 'Userid',
  `classid` int(11) NOT NULL COMMENT 'ClassIsSelected',
  PRIMARY KEY (`selectid`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of selectclass
-- ----------------------------
INSERT INTO `selectclass` VALUES ('1', '1', '1');
INSERT INTO `selectclass` VALUES ('6', '1', '7');
INSERT INTO `selectclass` VALUES ('5', '1', '3');
INSERT INTO `selectclass` VALUES ('7', '1', '4');
INSERT INTO `selectclass` VALUES ('8', '3', '1');
INSERT INTO `selectclass` VALUES ('9', '3', '2');
INSERT INTO `selectclass` VALUES ('10', '3', '3');
INSERT INTO `selectclass` VALUES ('11', '3', '4');

-- ----------------------------
-- Table structure for studentlookresources
-- ----------------------------
DROP TABLE IF EXISTS `studentlookresources`;
CREATE TABLE `studentlookresources` (
  `studentlookresourcesid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `lookresources` int(11) DEFAULT NULL,
  `classid` int(11) DEFAULT NULL,
  PRIMARY KEY (`studentlookresourcesid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of studentlookresources
-- ----------------------------

-- ----------------------------
-- Table structure for studentprogress
-- ----------------------------
DROP TABLE IF EXISTS `studentprogress`;
CREATE TABLE `studentprogress` (
  `studentprogressid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `progress` int(11) DEFAULT NULL,
  PRIMARY KEY (`studentprogressid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of studentprogress
-- ----------------------------

-- ----------------------------
-- Table structure for studentscore
-- ----------------------------
DROP TABLE IF EXISTS `studentscore`;
CREATE TABLE `studentscore` (
  `useridandclassid` varchar(255) NOT NULL,
  `seeclassscore` varchar(255) DEFAULT NULL,
  `testscore` varchar(255) DEFAULT NULL,
  `offlinescore` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`useridandclassid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of studentscore
-- ----------------------------
INSERT INTO `studentscore` VALUES ('3and1', '80', '', '');
INSERT INTO `studentscore` VALUES ('1and1', '20', '', '');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userid` int(255) NOT NULL AUTO_INCREMENT COMMENT 'Primarykey',
  `username` varchar(255) NOT NULL COMMENT 'UserName',
  `password` varchar(255) NOT NULL COMMENT 'PassWord',
  `displayname` varchar(255) DEFAULT NULL COMMENT 'DisplayName',
  `belong` varchar(255) NOT NULL COMMENT 'Address',
  `type` varchar(255) NOT NULL COMMENT 'Role',
  `userphoto` varchar(500) DEFAULT NULL COMMENT 'Avatar',
  PRIMARY KEY (`userid`,`username`),
  UNIQUE KEY `userid` (`userid`,`username`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'abc', '123', 'heikunan', 'S3crop', 'Admin', '/uploads/Hylx7XWwf1518576359686.jpg');
INSERT INTO `user` VALUES ('2', 'abcd', '123', 'dwdwd', 'S3crop', 'Teacher', null);
INSERT INTO `user` VALUES ('3', 'abcde', '1234', 'asdasdasd', 'S3crop', 'Student', null);
INSERT INTO `user` VALUES ('4', 'abcdes', '123', 'adasdasdsad', 'S3crop', 'Student', null);
