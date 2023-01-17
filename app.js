const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json(), cookieParser());

// 수업 실습 QueryString
app.get('/querystring', (req, res) => {
    console.log(req.query)
    res.send("쿼리스트링 API")
})

// 수업 실습 Path Param
app.get('/querystring/:pathparam', (req, res) => {
    console.log(req.params)
    res.send("패스파람 API")
})

// 수업 실습 Header(header)
app.get('/header', (req, res) => {
    console.log(req.headers)
    console.log(req.headers.test_headerid)
    res.send("헤더 API")
})

// 수업 실습 Header(cookie)
app.get('/cookie', (req, res) => {
    console.log(req.cookies)
    res.send("쿠키 API")
})

// 수업 실습 Body(json)
app.get('/json', (req, res) => {
    console.log(req.body)
    res.send("바디 API")
})

//----------------------------------------------------

// 로그인 API
app.post('/login', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    console.log(email, password)
    res.send("/login api")
})

// 회원가입 API
app.post('/register', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    console.log(email, password)
    res.send("/register api")
})

// 회원정보 API
app.get('/users/:userId', (req, res) => {
    console.log(req.params)
    const {userId} = req.params
    console.log(userId)
    res.send("횐정");
});

// 게시글 리스트 API
app.get('/articles', (req, res) => {
    const posting = {
        "nickname":"easy",
        "content":"test"
    }
    console.log(posting);
    res.send("게시글 리스트");
});

// 선택 게시글 상세 정보 API
app.get("/articles/:articleId", (req, res) => {
    const {articleId} = req.params
    console.log(articleId)
    res.send("선택 게시글 상세 정보")
})


// 게시글 작성 API
app.post("/posts", (req, res) => {
    console.log(req.body)
    const { title, content } = req.body
    console.log(title, content)
    res.send("게시글 작성")
})

// 게시글 수정 API (모르겠음)
app.post("posts/:postId", (req, res) => {
    const {title, content} = req.body
    const{postId} = req.params
    console.log(postId)
    console.log(title, content)
    res.send({title, content, postId})
})

// 게시글 삭제 API (모르겠음)
app.post("posts/:postId", (req, res)=> {
    const {postId} = req.params
    console.log(postId)
    res.send({postId})
})

app.listen(3000, () => {
    console.log("웹 서버 실행!!!!");
});