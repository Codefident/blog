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
    conn.query('SELECT * FROM `posts`', (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    })
});

app.listen(port, () => console.log('server running at :' + port));
