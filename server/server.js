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
    conn.query('SELECT * FROM `posts` ORDER BY date DESC', function (err, results, fields) {
        if (err)
            throw err;
        res.send(results);
    });
});
app.get('/show-post', function (req, res) {
    var id = req.query.id;
    conn.query(mysql.format('SELECT posts.author, posts.date, posts.title, posts.header, texts.text FROM posts INNER JOIN texts ON posts.id=texts.post_id WHERE posts.id=' + id), function (err, results, fields) {
        if (err)
            throw err;
        res.send(results[0]);
    });
});
app.listen(port, function () { return console.log('server running at :' + port); });
