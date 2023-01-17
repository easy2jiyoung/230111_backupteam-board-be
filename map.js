// 과제 1번 - 실습 코드 연습

const scores = [
    {name: "지영", score: 80, mbti: "INFP", addr: "지구 어딘가", contact: "010-1234-5678"},
    {name: "효원", score: 50, mbti: "INFP", addr: "지구 어딘가", contact: "010-1234-5678"},
    {name: "정기", score: 60, mbti: "INFP", addr: "지구 어딘가", contact: "010-1234-5678"},
    {name: "대신", score: 30, mbti: "INFP", addr: "지구 어딘가", contact: "010-1234-5678"},
    {name: "택환", score: 94, mbti: "INFP", addr: "지구 어딘가", contact: "010-1234-5678"},
    {name: "호승", score: 30, mbti: "INFP", addr: "지구 어딘가", contact: "010-1234-5678"},
    {name: "희선", score: 23, mbti: "INFP", addr: "지구 어딘가", contact: "010-1234-5678"},
    {name: "설인", score: 56, mbti: "INFP", addr: "지구 어딘가", contact: "010-1234-5678"},
]

// 40점 미만 점수 받은 사람 구하기
    // for문
    const 빠따 = []
    for (let i = 0; i < scores.length; i++) {
        if(scores[i].score < 40) {
            빠따.push(scores[i].name)
        }
    }
    console.log(빠따)

    // filter
    const 빠따ByFilter = scores.filter(score => score.score < 40)
    console.log(빠따ByFilter)

/*
1. score.score 가 40점 미만이면 true, 이상이면 false를 반환하는 함수
const 빠따ByFilter = score.filter((score) => {
    if (score.score < 40) {
        return true
    } else {
        return false
    }
})

2. 삼항 연산자로 변환
const 빠따ByFilter = score.filter((score) => {
    const result = score.score < 40 ? true : false
    return result
})

3. 변수 할당없이 연산을 반환
const 빠따ByFilter = score.filter((score) => {
    return score.score < 40 ? true : false
})

4. 3항 연산자 무의미하게 사용하는 것 제거
const 빠따ByFilter = score.filter((score) => {
    return score.score < 40
})

5. 화살표 함수 return 생략 가능 조건일 때 생략
const 빠따ByFilter = score.filter((score) => score.score < 40)

6. 화살표 함수 인자 하나일 때 괄호 생략
const 빠따ByFilter = score.filter(score => score.score < 40)
*/

// '지영'의 점수 확인
    // for문
    let 지영score = null
    for (let i = 0; i < scores.length; i++) {
        if (scores[i].name === '지영') {
            지영score = scores[i].score
        }
    }
    console.log("지영score : ", 지영score)

    // find
    const 지영scoreByFind = scores.find(score => score.name === '지영')

/*
1.
const 지영scoreByFind = scores.find((score) => {
    if (scores.name === '지영') {
        return true
    } else {
        return false
    }
})

2.
const 지영scoreByFind = scores.find((score) => {
    const result = scores.name === '지영' ? true : false
    return result    
})

3.
const 지영scoreByFind = scores.find((score) => {
    return scores.name === '지영' ? true : false
})

4.
const 지영scoreByFind = scores.find((score) => {
    return scores.name === '지영'
})

5.
const 지영scoreByFind = scores.find((score) => scores.name === '지영')

6.
const 지영scoreByFind = scores.find(score => scores.name === '지영')
*/

// 보정: 점수에 5점씩 가산
    // for문
    const 보정scores = []
    for (let i = 0; i < scores.length; i++) {
        const newScore = scores[i].score + 5
        보정scores.push({
            ...scores[i],
            score: newScore
        })
    }
    console.log("보정scores: ", 보정scores)

    // map
    const 보정scoresByMap = scores.map(score => ({
        ...score,
        score: score.score + 5
    }))
    console.log("보정scoresByMap: ", 보정scoresByMap)

/*
1. const 보정scoresByMap = scores.map((score) => {
    return {
        ...score,
        score = score.score + 5
    }
})

2. const 보정scoresByMap = scores.map(score => ({
    ...score,
    score = score.score + 5
}))

*/