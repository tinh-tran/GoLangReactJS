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
INSERT INTO `class` VALUES ('1', 'GoLang', '325', '吕小鸣', '百度', '简介：移动web开发适配的方案有许多，然而最好的方案一定要掌握。本课程主要讲解移动web开发中常见的适配方法，着重讲解使用rem方案的原理和使用方法，来进行移动web开发的适配工作，借助于实战页面让学者更加清晰的掌握实战工作中如何应用rem适配技术。', '精品专区', 'https://img4.mukewang.com/5a71255d0001400e06000338-240-135.jpg', '1', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('2', 'Java秒杀系统方案优化', '523', 'Joshua', '阿里巴巴', '以“秒杀”这一Java高性能高并发的试金石场景为例，带你通过一系列系统级优化，学会应对高并发。', '', 'https://img2.mukewang.com/szimg/5a405cbc000124ca05400300.jpg', '1', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('3', '唐诗艺术', '210', '尚永亮', '武汉大学', '本课程将与您共同领略唐诗的艺术魅力，鉴赏唐诗作品，探寻创作脉理，既有感性的把握，又有理论的概括，与您一起走近唐诗的审美本质和唐人的创作实态，让经典滋养现代心灵。', '精品专区', 'https://edu-image.nosdn.127.net/BD05AA0DE8545A5F805DD2ED4D179734.JPG?imageView&thumbnail=510y288&quality=100', '12', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('4', '博弈论基础', '400', '蒋文华', '浙江大学', '近20年来共有16位经济学家因在博弈论及相关领域的贡献而获得诺贝尔经济学奖。博弈论已从经济学的分析工具发展成各门社会科学的重要分析方法。本课重点介绍博弈论的基本分析方法及其在社会现象分析、个人事物处理中的具体应用，采用互动式、研讨式教学方式，重点提升学员研究和解决现实问题的能力。', '', 'https://img-ph-mirror.nosdn.127.net/HwlREKM0B8IHaWTTQLhvNw==/6608648723608705783.jpg?imageView&thumbnail=223x125&quality=100', '14', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('5', '财务管理', '420', '索樂晴', '台湾清华大学', '林哲群教授的教学风格条理分明又不失风趣，并在课程设计上采取循序渐进的方式。由最基础的财务报表、比率分析开始，让学生学到最实用的财务知识，进而引领学生利用所学的观念，了解公司的内部治理与投资决策，并结合当下时事，培养学生对金融时事的敏感度，将书本上的知识应用于日常生活中。', '学校专区', 'https://edu-image.nosdn.127.net/5F29CA4CCB5C0445116D93280C72FD97.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '2', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('6', '生活心理学', '236', '田媛', '华中师范大学', '你说：我对心理学感兴趣；你说：我想考教师资格证、心理咨询师；你说：网上那么多心理学的东西我觉得好零散心好方...别着急，这门课带你走进系统的心理学，有理论讲解、经典案例、最新研究；通俗易懂、有趣实用、有味儿止渴；教你用心理学认识自己和周遭，帮助自己更好地成长。你的心理学入门第一课！', '学校专区', 'https://edu-image.nosdn.127.net/89A1B1D3E8C699D656DA3622635128A1.png?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '3', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('7', '心理学与生活 ', '300', '陈昌凯', '南京大学', '心理学很神秘？你会发现，只要有人的地方，就有心理学！ 心理学很深奥？你会发现，似乎每个人都是大众心理学家，谁都可以说点“心理学”。 我们生活中处处都是心理学！但这门课程却要告诉你，我们常常挂在嘴边的“心理学”绝大部分是错的，剩下的一小部分也是不全面的。', '', 'https://edu-image.nosdn.127.net/E168A15535FA40E9A6D24C044469C9C5.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '1', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('8', '交替传译', '600', '余怿', '广东外语外贸大学', '口译员的大脑被称为神秘的黑箱子，学习者们常常好奇口译员如何能有效分配精力，在短时间内记忆大量内容、笔记、即时转换语言并流畅表达？本课程选取交替传译训练中的核心技能，如信息分析、记忆及笔记等，通过原理讲解和练习展示带领大家', '学校专区', 'https://edu-image.nosdn.127.net/F2868411355DBFCC13F469A8FF4D9A3E.png?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '1', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('9', 'IT行业职场英语', '589', '王宇', '大连理工大学', '迅速吸收最新行业资讯，和来自全球的客户保持有效沟通和交流，是IT高端人才的职场护身绝技! IT行业职场英语课程聚焦你的沟通能力，阅读和写作能力，思维与决策力，助力你在人才济济的IT行业笑傲江湖！', '学校专区', 'https://edu-image.nosdn.127.net/181019E7BC4138F6620BCF57B1DA5C18.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '14', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('10', '摄影基础', '498', '张秋雯', '电子科技大学', '当今图像时代，摄影已成为一门普遍的艺术语言，是凝固瞬间和认识世界的一个重要手段。本课程以实战拍摄为主要方式，结合基础技术知识讲解，与你一起分享摄影的内容及技巧，提升美学素养，引导大家体验美、发现美，表达美，用相机有选择的观察和记录生活。', '学校专区', 'https://edu-image.nosdn.127.net/5E2B6887C3CA31F6BCF14D40F23B519E.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '15', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('11', '信息安全概论', '789', '吕春利', '中国农业大学', '随着信息技术的发展以及计算机应用的普及，网络环境中的信息安全与人们的生活、工作和学习息息相关。本课程主要介绍信息安全的基本概念，密码学的基本术语和原理，以及日常使用中安全知识和技能。由于信息安全的核心是密码学，所以密码学也是本课程的重点。', '巨林专区', 'https://edu-image.nosdn.127.net/821FF02EBD63421A183F6F4A41AAEEA0.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '16', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('12', '宇宙新概念 ', '689', '赵江南', '武汉大学', '宇宙是如何起源，又是如何演化、发展、灭亡的？自古以来一直是人类最感兴趣和不断探索的问题之一，这也是本课程要向学习者介绍的内容，包括牛顿的万有引力理论，爱因斯坦的广义相对论，霍金的宇宙观，时间、历法，太阳系，恒星，星系，致密天体，宇宙论等。', '精品专区', 'https://edu-image.nosdn.127.net/288647B04DED46F53F2154ABF422099B.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '10', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('13', '植物与人类', '700', '田兴军', '南京大学', '一株植物可以拯救万千生命，一粒种子能带给你巨额财富；衣食住行，飞禽走兽，细数都和植物有着密切的关系；植物是长寿的，原因何在？植物是不动的，但她有情感，有策略！植物是多样的，有人类尚没有发现的诸多奥秘和潜在价值。《植物与人类》将引领同学们走进这一神秘世界！来吧，我们一起学习！', '精品专区', 'https://edu-image.nosdn.127.net/3EB8E84951DE65606D631BB9245832D6.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '2', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('14', '动物生理学', '688', '谢胜松', '华中农业大学', '动物，作为地球生物圈中主要的组成类群，展现出丰富多彩的生命现象。动物的生命活动不仅对维持生态平衡起着重要作用，还为人类社会发展提供了丰富的物质和精神资源。动物生命是如何开始，又如何进展的？通过课程的学习，让我们领略动物生命的精彩，探索奇妙的动物生理世界，了解生命的本质规律与机制。\r\n动物，作为地球生物圈中主要的组成类群，展现出丰富多彩的生命现象。动物的生命活动不仅对维持生态平衡起着重要作用，还为人类社会发展提供了丰富的物质和精神资源。动物生命是如何开始，又如何进展的？通过课程的学习，让我们领略动物生命的精彩，探索奇妙的动物生理世界，了解生命的本质规律与机制。\r\n动物，作为地球生物圈中主要的组成类群，展现出丰富多彩的生命现象。动物的生命活动不仅对维持生态平衡起着重要作用，还为人类社会发展提供了丰富的物质和精神资源。动物生命是如何开始，又如何进展的？通过课程的学习，让我们领略动物生命的精彩，探索奇妙的动物生理世界，了解生命的本质规律与机制。\r\n动物，作为地球生物圈中主要的组成类群，展现出丰富多彩的生命现象。动物的生命活动不仅对维持生态平衡起着重要作用，还为人类社会发展提供了丰富的物质和精神资源。动物生命是如何开始，又如何进展的？通过课程的学习，让我们领略动物生命的精彩，探索奇妙的动物生理世界，了解生命的本质规律与机制。', '', 'https://edu-image.nosdn.127.net/71475203734C4CB2497A63BA9F3DFB68.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '3', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('15', '理解马克思', '723', '张亮', '南京大学', '200年前的1818年5月5日，卡尔·马克思诞生在普鲁士王国的古城特利尔。中学毕业时，师长寄语马克思“发挥才能，无负众望”。马克思显然没有让师长失望：千禧年之交，英国广播公司举办的“千年思想家”和“古今最伟大哲学家”调查，马克思均名列第一。这充分说明了马克思在人类思想史上的位置。', '精品专区', 'https://edu-image.nosdn.127.net/4FB0D068069F58191EE72D9EF946CD21.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '4', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('16', '逻辑学导论', '620', '李静', '西北大学', '亚里士多德认为：“逻辑学是一切科学的工具。”逻辑学是人类历史上最古老的智慧学科之一，也是联合国教科文组织规定的七大基础学科之一。1977年版英国大百科全书将逻辑学列为知识的五大分科之首。说明逻辑学是思想的武器、认识的工具、科学的方法，任何科学理论都是由不同的概念构成的逻辑系统。', '', 'https://edu-image.nosdn.127.net/BDA29B3E611F218B1C0A0FB41E8B80E3.png?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '5', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('17', '形势与政策', '325', '崔美娜', '华东理工大学', '本课程通过分析党和国家当前所面临的政治、经济形势和国家改革发展所处的国际环境、时代背景，引导学生自觉拥护党的基本路线、重大方针和政策，深刻理解党和政府治国方略，正确认识世界和中国发展大势，正确认识中国特色和国际比较，正确认识时代责任和历史使命，正确认识远大抱负和脚踏实地。', '', 'https://edu-image.nosdn.127.net/DDFF89092027479DB7BAD24AADBADA20.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '6', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('18', '行政法学', '466', '江国华', '武汉大学', '在政府职能转变的时代，我们的生活同政府的行为密切相关，与政府接触的范围更广、频次更高，与行政机构发生冲突的可能性也更大。系统学习本课程，学会了如何同行政机构打交道，看待行政处罚会更理性，取得政府许可会更高效，走“民告官”也不是那么困难重重，我们的生活会更幸福更有序。', '', 'https://img-ph-mirror.nosdn.127.net/MJiCt_kmrbMevo0uFp_oTw==/2400981551359921669.jpg?imageView&thumbnail=223x125&quality=100', '7', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('19', '走向深度的合作学习', '365', '刘徽', '华中科技大学', '合作学习（Cooperative Learning）被誉为“近十几年来最重要和最成功的教学改革”。本门课程采用案例教学法，针对当前合作学习课堂教学存在的问题，从如何设计小组任务、小组组建策略、合作学习方法、课堂实施策略和小组评价策略五部分出发，为教师提供系统的指导，帮助教师走向深度的合作学习。', '', 'https://edu-image.nosdn.127.net/A95A8535EA9ED11401027D2FA0DE1A9F.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100', '8', '是', '50%', '20%', '30%');
INSERT INTO `class` VALUES ('20', '教学设计原理与方法', '566', '谢幼如', '华南师范大学', '“教学设计原理与方法”课程由华南师范大学博士生导师谢幼如教授主持。本课程由国家级精品资源共享课转型升级而成，内容前沿、特色鲜明，助力“互联网+”时代新型教师和教学设计人才培养。无论您来自基础教育、高等教育、职业教育还是公司企业，都能从本课程中获得您所需要的教学设计相关知识和技能。', '', 'https://edu-image.nosdn.127.net/A435D6583455C99D4BED98EA7EE0DC42.png?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100', '9', '是', '50%', '20%', '30%');

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
INSERT INTO `seeclass` VALUES ('1', '19', '22', '', '有', '3');
INSERT INTO `seeclass` VALUES ('1', '18', '25', '有', '', '3');
INSERT INTO `seeclass` VALUES ('1', '17', '21', '有', '有', '3');
INSERT INTO `seeclass` VALUES ('1', '16', '21', '有', '', '1');

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
INSERT INTO `user` VALUES ('1', 'abc', '123', 'heikunan', '湖北大学', '管理员', '/uploads/Hylx7XWwf1518576359686.jpg');
INSERT INTO `user` VALUES ('2', 'abcd', '123', 'dwdwd', '湖北大学', '教师', null);
INSERT INTO `user` VALUES ('3', 'abcde', '1234', 'asdasdasd', '湖北大学', '学生', null);
INSERT INTO `user` VALUES ('4', 'abcdes', '123', 'adasdasdsad', '湖北大学', '学校', null);
