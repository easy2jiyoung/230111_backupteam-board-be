const express = require("express");
const app = express();

app.get('/host', (req, res) => {
    res.send("host 요청 했음!!");
});

app.post('/post', (req, res) => {
    res.send("post 요청 했음!!");
});

app.get('/home', (req, res) => {
    res.send("홈 화면!!");
});

app.post('/login', (req, res) => {
    res.send("로그인!!!");
});

app.listen(3000, () => {
    console.log("웹 서버 실행!!!!");
});