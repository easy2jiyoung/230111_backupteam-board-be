const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json(), cookieParser());

app.get('/host', (req, res) => {
    res.send("host 요청 했음!!");
});


app.get('/home', (req, res) => {
    console.log(req.cookies);
    res.send("홈 화면!!");
});

app.post('/register', (req, res) => {
    res.send("회원가입");
});

app.post('/login', (req, res) => {
    res.send("로그인!!!");
});

app.listen(3000, () => {
    console.log("웹 서버 실행!!!!");
});