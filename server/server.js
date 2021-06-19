var express = require('express');
var app = express();
var cors = require('cors');
var mysql = require('mysql');
var port = 3001;
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});
conn.connect(function (err) { if (err)
    console.log(err); });
app.use(cors());
app.get('/get-all-posts', function (req, res) {
    conn.query('SELECT * FROM `posts`', function (err, results, fields) {
        if (err)
            throw err;
        res.send(results);
    });
});
app.listen(port, function () { return console.log('server running at :' + port); });
