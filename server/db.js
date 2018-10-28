const mysql = require("mysql");
 //导入配置文件   
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'Course'
});
 //导出查询相关  
const query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接    
                conn.release();
                //事件驱动回调    
                callback(qerr, vals, fields);
            });
        }
    });
};
 module.exports = query;   