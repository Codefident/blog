declare function require(module: string);

const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port: number = 3001;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});
conn.connect(err => { if (err) console.log(err); });

app.use(cors());

app.get('/get-all-posts', (req, res) => {
    conn.query('SELECT * FROM `posts` ORDER BY date DESC', (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    })
});

app.get('/show-post', (req, res) => {
    const id = req.query.id;
    conn.query(mysql.format('SELECT posts.author, posts.date, posts.title, posts.header, texts.text FROM posts INNER JOIN texts ON posts.id=texts.post_id WHERE posts.id=' + id), (err, results, fields) => {
        if (err) throw err;
        res.send(results[0]);
    })
})

app.listen(port, () => console.log('server running at :' + port));
