const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json(), cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies)
    res.send("/ 요청 했음!!");
});


app.post('/post', (req, res) => {
    const {name, age} = req.body;
    console.log(name, age);
    res.send({name, age});
});

// 회원정보 가져오기
app.get('/users/:userId', (req, res) => {
    const {userId} = req.params
    console.log(userId)
    res.send("get..");
});

// 게시글 리스트 가져오기   
app.get('/articles', (req, res) => {
    const post = {
        "nickname":"easy",
        "content":"test"
    }
    console.log(post);
    res.send(post);
});

// 선택 게시글 상세 정보 가져오기
app.get("/articles/:articleId", (req, res) => {
    const {articleId} = req.params
    console.log(articleId)
    res.send(articleId)
})

// 로그인
app.post("/login", (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
    res.send({email, password})
});

// 회원가입
app.post("/register", (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
    res.send({email,password})
})

// 게시글 작성
app.post("/posts", (req, res) => {
    const {title, content} = req.body
    console.log(title, content)
    res.send({title, content})
})

// 게시글 수정
app.post("posts/:postId", (req, res) => {
    const {title, content} = req.body
    const{postId} = req.params
    console.log(postId)
    console.log(titlek, content)
    res.send({title, content, postId})
})

// 게시글 삭제
app.post("posts/:postId", (req, res)=> {
    const {postId} = req.params
    console.log(postId)
    res.send({postId})
})

app.listen(3000, () => {
    console.log("웹 서버 실행!!!!");
});