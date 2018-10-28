const express = require('express');
const shortid = require('shortid');
const cookieParser = require('cookie-parser');
const Bodyparser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const app = express();
const query = require('./db');

//静态文件目录
app.use(express.static('public'));

//设置bodyparser
app.use(Bodyparser.urlencoded({ extended: true }));

//设置上传的储存引擎
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'public/uploads/');
	},
	filename: function(req, file, cb) {
		cb(null, shortid.generate() + Date.now() + '.' + file.originalname.split('.')[1]);
	}
});

//设置上传目录
const upload = multer({ storage: storage });

//接收axios默认发送数据的方法
app.use(Bodyparser.json());

//设置cookieparser
app.use(cookieParser('intell-learn'));

//设置发往浏览器的session
app.use(
	session({
		name: 'intell-learn', //设置写入用户浏览器cookie的key
		secret: 'intell-learn', //签名，与cookie保持一致
		resave: true,
		maxAge: 90000, //设置失效时间单位为ms
		saveUninitialized: true
	})
);

//跨域访问，项目上线后删除
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('X-Powered-By', ' 3.2.1');
	if (req.method === 'OPTIONS') res.send(200);
	else /*让options请求快速返回*/ next();
});

//用户访问次数
app.get('/api', function(req, res) {
	if (req.session.visit) {
		req.session.visit++;
		res.json(req.session.visit);
	} else {
		req.session.visit = 1;
		res.json(req.session.visit);
	}
});

//通过用户id获取用户信息
app.post('/api/user/info/id', function(req, res) {
	const { userid } = req.body;
	let sql = `SELECT * FROM user WHERE userid = ${userid}`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans[0].userphoto);
		}
	});
});

//获取用户信息
app.get('/api/user/info', function(req, res) {
	if (req.session.userid) {
		let { userid } = req.session;
		let sql = `SELECT * FROM user WHERE userid = ${userid}`;
		query(sql, function(err, ans) {
			if (err) {
				console.log(err);
			} else {
				res.json(ans);
			}
		});
	} else {
		res.json({ code: 0 });
	}
});

//用户登陆
app.post('/api/user/login', function(req, res) {
	const { username, password } = req.body;
	let sql = `SELECT * from user WHERE username ='${username}' AND password = '${password}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			if (ans) {
				delete ans[0].password;
				res.json(...ans);
			} else {
				res.json({ code: 0 });
			}
		}
	});
});

//获取所有分类信息
app.get('/api/classtype', function(req, res) {
	let sql = `SELECT * FROM classtype`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//获取热门课程信息
app.get('/api/hotclass', function(req, res) {
	let sql = `SELECT class.classid,classphoto,selectstudent,classname,belong,teacher,type,display FROM class,hotclass WHERE class.classid = hotclass.classid AND display = "是" ORDER BY classid`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//获取课程的数量多少
app.post('/api/class/number', function(req, res) {
	const { classtype } = req.body;
	if (classtype) {
		if (classtype === '全部') {
			let sql = `select count(*) from class WHERE display = "是"`;
			query(sql, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json(ans);
				}
			});
		} else if (classtype === '巨林专区') {
			let sql = `select count(*) from class WHERE display = "是" AND type='巨林专区'`;
			query(sql, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json(ans);
				}
			});
		} else if (classtype === '精品专区') {
			let sql = `select count(*) from class WHERE display = "是" AND type='精品专区'`;
			query(sql, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json(ans);
				}
			});
		} else if (classtype === '学校专区') {
			let sql = `select count(*) from class WHERE display = "是" AND type='学校专区'`;
			query(sql, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json(ans);
				}
			});
		}
	} else {
		res.json({ code: 0 });
	}
});

//取所有的课程
app.post('/api/class/all', function(req, res) {
	const { type } = req.body;
	let sql = `SELECT * FROM class WHERE type != '${type}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//取四门课程
app.post('/api/class', function(req, res) {
	const { classtype, page } = req.body;
	if (!classtype || !page) {
		res.json({ code: 0 });
	} else {
		if (classtype === '全部') {
			let sql = `SELECT * FROM class WHERE display = "是" LIMIT ${(page - 1) * 4} , 4`;
			query(sql, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json(ans);
				}
			});
		} else if (classtype === '巨林专区') {
			let sql = `SELECT * FROM julinclass,class WHERE class.classid = julinclass.classid AND display='是' LIMIT ${(page -
				1) *
				4} , 4`;
			query(sql, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json(ans);
				}
			});
		} else if (classtype === '精品专区') {
			let sql = `SELECT * FROM jinpinclass,class WHERE class.classid = jinpinclass.classid AND display = "是" LIMIT ${(page -
				1) *
				4} , 4`;
			query(sql, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json(ans);
				}
			});
		} else if (classtype === '学校专区') {
			let sql = `SELECT * FROM schoolclass,class WHERE class.classid = schoolclass.classid AND display = "是" LIMIT ${(page -
				1) *
				4} , 4`;
			query(sql, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json(ans);
				}
			});
		}
	}
});

//添加课程到专区
app.post('/api/class/add/one', function(req, res) {
	const { sqltable, classid, name } = req.body;
	let sql1 = `INSERT INTO ${sqltable}(classid) VALUES('${classid}')`;
	let sql2 = `UPDATE class SET type="${name}" WHERE classid = '${classid}' `;
	query(sql1, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			query(sql2, function(err, ans) {
				if (err) {
					console.log(err);
				} else {
					res.json({ code: 0 });
				}
			});
		}
	});
});

//查询巨林专区课程
app.post('/api/class/julin/get', function(req, res) {
	let sql = `SELECT * FROM julinclass,class WHERE class.classid = julinclass.classid`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//查询精品专区课程
app.post('/api/class/jinpin/get', function(req, res) {
	let sql = `SELECT * FROM jinpinclass,class WHERE class.classid = jinpinclass.classid`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//查询学校专区课程
app.post('/api/class/school/get', function(req, res) {
	let sql = `SELECT * FROM schoolclass,class WHERE class.classid = schoolclass.classid`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//课程搜索
app.post('/api/search', function(req, res) {
	const { item } = req.body;
	let sql = `SELECT * FROM class WHERE display="是" AND CONCAT(classname,teacher,belong,introduction) LIKE '%${item}%'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//获取学生是否选课
app.post('/api/course/isselect', function(req, res) {
	const { classid, userid } = req.body;
	let sql = `SELECT * from selectclass WHERE classid = '${classid}' AND userid = '${userid}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			if (ans.length !== 0) {
				res.json(ans);
			} else {
				res.json({ code: 0 });
			}
		}
	});
});

//获取单个课程的信息
app.post('/api/course', function(req, res) {
	const { classid } = req.body;
	let sql = `SELECT * FROM class WHERE classid = '${classid}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//增加课程章节
app.post('/api/course/chapter/add', function(req, res) {
	const { classid, chaptername, chapterorder } = req.body;
	let sql = `INSERT INTO classchapter(classid,chaptername,chapterorder) VALUES('${classid}','${chaptername}','${chapterorder}')`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json({ code: 0 });
		}
	});
});

//增加课程小节
app.post('/api/course/section/add', function(req, res) {
	const { classid, chapterid, sectionname, sectionorder } = req.body;
	let sql = `INSERT INTO classsection(classid , chapterid , sectionname , sectionorder) VALUES('${classid}','${chapterid}','${sectionname}','${sectionorder}')`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json({ code: 0 });
		}
	});
});

//获取单个课程的课程记录
app.post('/api/course/onejindu', function(req, res) {
	let { classid, userid } = req.body;
	let sql = `SELECT * FROM seeclass WHERE classid = '${classid}' AND userid = '${userid}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//写入学生成绩
app.post('/api/user/score', function(req, res) {
	const { userid, classid, seeclassscore, testscore, offlinescore } = req.body;
	let sql = `SELECT * FROM studentscore WHERE useridandclassid='${userid + 'and' + classid}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			if (ans.length > 0) {
				if (seeclassscore) {
					sql = `UPDATE studentscore SET seeclassscore='${seeclassscore}' WHERE useridandclassid='${userid +
						'and' +
						classid}'`;
				}
				if (testscore) {
					sql = `UPDATE studentscore SET testscore='${testscore}' WHERE useridandclassid='${userid +
						'and' +
						classid}'`;
				}
				if (offlinescore) {
					sql = `UPDATE studentscore SET offlinescore='${offlinescore}' WHERE useridandclassid='${userid +
						'and' +
						classid}'`;
				}
				query(sql, function(err, ans) {
					if (err) {
						console.log(err);
					} else {
						res.json({ code: 0 });
					}
				});
			} else {
				sql = `INSERT INTO studentscore(useridandclassid,seeclassscore,testscore,offlinescore) VALUES('${userid +
					'and' +
					classid}','${seeclassscore}','${testscore}','${offlinescore}')`;
				query(sql, function(err, ans) {
					if (err) {
						console.log(err);
					} else {
						res.json({ code: 0 });
					}
				});
			}
		}
	});
});

//单个课程的进度记录
app.post('/api/course/addjindu', function(req, res) {
	let { video, pdf, classid, sectionid, userid } = req.body;
	let sql = `SELECT * FROM seeclass WHERE classid = '${classid}' AND sectionid = '${sectionid}' AND userid = '${userid}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			if (ans.length > 0) {
				if (video) {
					let sql = `UPDATE seeclass SET video='有' WHERE classid='${classid}' AND sectionid = '${sectionid}' AND userid='${userid}'`;
					query(sql, function(err, ans) {
						if (err) {
							console.log(err);
						} else {
							res.json({ code: 0 });
						}
					});
				} else {
					let sql = `UPDATE seeclass SET pdf='有' WHERE classid='${classid}' AND sectionid = '${sectionid}' AND userid='${userid}'`;
					query(sql, function(err, ans) {
						if (err) {
							console.log(err);
						} else {
							res.json({ code: 0 });
						}
					});
				}
			} else {
				if (video) {
					let sql = `INSERT INTO seeclass(classid , sectionid , video , pdf , userid) VALUES('${classid}','${sectionid}','有','${pdf}','${userid}')`;
					query(sql, function(err, ans) {
						if (err) {
							console.log(err);
						} else {
							res.json({ code: 0 });
						}
					});
				} else {
					let sql = `INSERT INTO seeclass(classid , sectionid , video , pdf , userid) VALUES('${classid}','${sectionid}','${video}','有','${userid}')`;
					query(sql, function(err, ans) {
						if (err) {
							console.log(err);
						} else {
							res.json({ code: 0 });
						}
					});
				}
			}
		}
	});
});

//获取单个课程的章节信息
app.post('/api/course/chapter', function(req, res) {
	const { classid } = req.body;
	let sql = `SELECT chaptername,chapterid,chapterorder FROM classchapter WHERE classid = '${classid}' ORDER BY chapterorder`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//获取单个课程的小节信息
app.post('/api/course/section', function(req, res) {
	const { classid } = req.body;
	let sql = `SELECT * FROM classsection WHERE classid = '${classid}' ORDER BY chapterid AND sectionorder`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.json(ans);
		}
	});
});

//学生选课
app.post('/api/course/selectclass', function(req, res) {
	const { classid, userid } = req.body;
	if (classid && userid) {
		let sql = `INSERT INTO selectclass (classid,userid) VALUES (${classid},${userid})`;
		query(sql, function(err, ans) {
			if (err) {
				console.log(err);
			} else {
				res.json(ans);
			}
		});
	} else {
		res.json({ code: 0 });
	}
});

//获取用户选择的课程
app.post('/api/user/selectclass/info', function(req, res) {
	const { userid } = req.body;
	let sql = `SELECT class.classid , class.classname , class.type , class.see , class.test , class.offline FROM class , selectclass WHERE selectclass.userid=${userid} AND class.classid = selectclass.classid`;
	query(sql, function(err, ans) {
		if (ans) {
			for (let i = 0; i < ans.length; i++) {
				sql = `SELECT * FROM studentscore WHERE useridandclassid='${userid}and${ans[i].classid}'`;
				query(sql, function(err, ansone) {
					if (err) {
						console.log(err);
					} else {
						if (ansone.length > 0) {
							ans[i].seeclassscore = ansone[0].seeclassscore;
							ans[i].testscore = ansone[0].testscore;
							ans[i].offlinescore = ansone[0].offlinescore;
						} else {
							ans[i].seeclassscore = '';
							ans[i].testscore = '';
							ans[i].offlinescore = '';
						}
						if (i === 3) {
							res.json(ans);
						}
					}
				});
			}
		} else {
			res.json({ code: 0 });
		}
	});
});

//上传用户头像
app.post('/api/user/photo', upload.single('file'), function(req, res, next) {
	let sql = `UPDATE user SET userphoto='/uploads/${req.file.filename}' WHERE userid = '${req.query.userid}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.send('ok');
		}
	});
});

// 上传课程
app.post('/api/class/create/one', upload.single('classphoto'), function(req, res, next) {
	const { classname, introduction, teacher, belong, createid, see, test, offline } = req.body;
	let sql = `INSERT INTO class( classname , teacher , belong , introduction, classphoto, display, type ,createid,see,test,offline) VALUES ('${classname}','${teacher}','${belong}','${introduction}','uploads/${req
		.file.filename}','否' , '无' , '${createid}','${see}%','${test}%','${offline}%')`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.send('ok');
		}
	});
});

// 学校上传课程
app.post('/api/school/create/one', upload.single('classphoto'), function(req, res, next) {
	const { classname, introduction, teacher, belong, createid, see, test, offline, type } = req.body;
	let sql = `INSERT INTO class( classname , teacher , belong , introduction, classphoto, display, type ,createid,see,test,offline) VALUES ('${classname}','${teacher}','${belong}','${introduction}','uploads/${req
		.file.filename}','否' , '${type}' , '${createid}','${see}%','${test}%','${offline}%')`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.send('ok');
		}
	});
});

//修改课程状态
app.post('/api/class/changedisplay', function(req, res) {
	const { classid, display } = req.body;
	let sql = `UPDATE class SET display='${display}' WHERE classid = '${classid}' `;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.send('ok');
		}
	});
});

//查询出当前用户创建的课程
app.post('/api/user/class', function(req, res) {
	const { createid } = req.body;
	let sql = `SELECT * FROM class WHERE createid = '${createid}'`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.send(ans);
		}
	});
});

//更改用户的信息
app.post('/api/user/changeinfo', function(req, res) {
	const { password, displayname, userid } = req.body;
	if (!password || !displayname) {
		res.json({ code: 0 });
	} else {
		let sql = `UPDATE user SET password = '${password}' , displayname='${displayname}' WHERE userid='${userid}'`;
		query(sql, function(err, ans) {
			if (err) {
				console.log(err);
			} else {
				res.json({ displayname: displayname });
			}
		});
	}
});

//获取首页图片
app.get('/api/indeximg', function(req, res) {
	let sql = `SELECT * FROM indeximg ORDER BY id`;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.send(ans);
		}
	});
});

//获取用户创建的课程
app.post('/api/teacher/class', function(req, res) {
	const { userid } = req.body;
	let sql = `SELECT * FROM class WHERE createid = '${userid}' `;
	query(sql, function(err, ans) {
		if (err) {
			console.log(err);
		} else {
			res.send(ans);
		}
	});
});

//创建一门新课程
app.post('/api/class/create', function(req, res) {
	const { classname, introduction, type, belong, teacher, createid, display } = req.body;
	let sql = `INSERT INTO class (classname,teacher,belong,introduction,type,createid,display) VALUES ("${classname}","${teacher}","${belong}","${introduction}","${type}",${createid},"${display}")`;
	query(sql, function(err, ans) {
		if (err) {
			res.json({ code: 0 });
		} else {
			res.json({ code: 1 });
		}
	});
});

//学校获取相同学校的角色
app.post('/api/school/getpeople', function(req, res) {
	const { userid, belong } = req.body;
	let sql = `SELECT * FROM user WHERE belong='${belong}' AND userid != ${userid} AND type="${belong}"`;
	query(sql, function(err, ans) {
		if (err) {
			res.json({ code: 0 });
		} else {
			res.json(ans);
		}
	});
});

//学校创建角色
app.post('/api/school/createpeople', function(req, res) {
	const { username, password, belong, type } = req.body;
	let sql = `INSERT INTO user ( username , password , belong , type ) VALUES ( '${username}' , '${password}' , '${belong}' , '${type}' )`;
	query(sql, function(err, ans) {
		if (ans) {
			res.json({ code: 1 });
		} else {
			res.json({ code: 0 });
		}
	});
});

//学校查找角色
app.post('/api/school/findpeople', function(req, res) {
	const { type, belong } = req.body;
	let sql = `SELECT * FROM user WHERE type='${type}' AND belong='${belong}'`;
	query(sql, function(err, ans) {
		if (ans) {
			res.json(ans);
		} else {
			res.json({ code: 0 });
		}
	});
});

//管理员获取所有身份
app.post('/api/admin/findpeople', function(req, res) {
	const { type } = req.body;
	let sql = `SELECT * from user WHERE type = '${type}'`;
	query(sql, function(err, ans) {
		if (ans) {
			res.json(ans);
		} else {
			res.json({ code: 0 });
		}
	});
});

//管理员添加一个新学校
app.post('/api/admin/createpeople', function(req, res) {
	const { type, belong, username, password } = req.body;
	let sql = `INSERT INTO user ( username , password , belong , type ) VALUES ( '${username}' , '${password}' , '${belong}' , '${type}' )`;
	query(sql, function(err, ans) {
		if (ans) {
			res.json({ code: 1 });
		} else {
			res.json({ code: 0 });
		}
	});
});

//上传一门课程资源
app.post('/api/course/addOneResources', upload.single('classinfo'), function(req, res) {
	const { type, classsectionid } = req.body;
	if (type === 'video') {
		let sql = `UPDATE classsection SET sectionvideo='uploads/${req.file
			.filename}' WHERE classsectionid = '${classsectionid}'`;
		query(sql, function(err, ans) {
			if (ans) {
				res.json({ code: 1 });
			} else {
				res.json({ code: 0 });
			}
		});
	} else {
		let sql = `UPDATE classsection SET sectionpdf='uploads/${req.file
			.filename}' WHERE classsectionid = '${classsectionid}'`;
		query(sql, function(err, ans) {
			if (ans) {
				res.json({ code: 1 });
			} else {
				res.json({ code: 0 });
			}
		});
	}
});

//打开端口
app.listen(9093, function() {
	console.log('port 9093!');
});
