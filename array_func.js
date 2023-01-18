const scores = [
    {name: '지영', score: 80, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '효원', score: 50, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '정기', score: 60, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '대신', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '택환', score: 94, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '호승', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '희선', score: 23, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '설인', score: 56, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
]

/* 2. 배열에서 40점 미만 점수받은 사람 구하기
for문의 경우에는 전부 이름으로 된 배열을 반환하는 한편, filter를 사용하면 배열 내 객체들로 이루어진 배열을 반환한다.
for문을 사용했을 때처럼 이름으로만 이루어진 배열로 반환하도록 수정한다. */

const unders = scores.filter(score => score.score < 40)
.map(under => under.name)

console.log(unders)

/* 3. 가장 공부를 잘했던 “지영”의 점수 확인
for문의 경우 "지영"의 score만 변수에 할당되는 한편, find를 사용하면 "지영"의 객체를 반환한다.
이 때 지영의 score만 할당되도록 수정한다. */

const jiyoung = scores.find(score => score.name === "지영")
console.log("지영's score: ", jiyoung.score)

/* 4. 아래처럼 영화 제목 게시판의 객체로 이루어진 배열과 영화 제목을 작성한 사용자로 이루어진 객체가 있다.
movies 의 user_id 는 users 의 id 를 참조 한다. */

const movies = [
    {id: 1, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
    {id: 3, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
    {id: 4, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
    {id: 5, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
    {id: 6, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
    {id: 7, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
    {id: 8, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
    {id: 9, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
    {id: 10, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
    {id: 11, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
    {id: 12, movie_title: "Undertaker and His Pals, The", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
    {id: 13, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
    {id: 14, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
    {id: 15, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
    {id: 16, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
    {id: 17, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
    {id: 18, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
    {id: 19, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
    {id: 20, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"}
]

const users = [
    {id: 1,name: "Trix Hannaby", email: "thannaby2r@home.pl"},
    {id: 2,name: "Mead Lantiff", email: "mlantiff2q@imageshack.us"},
    {id: 3,name: "Margette Scaplehorn", email: "mscaplehorn2p@parallels.com"},
    {id: 4,name: "Kimmy Hulks", email: "khulks2o@google.de"},
    {id: 5,name: "Margot Haward", email: "mhaward2n@census.gov"},
    {id: 6,name: "Meredith Spendlove", email: "mspendlove2m@spiegel.de"},
    {id: 7,name: "Tuck Francis", email: "tfrancis2l@msn.com"},
    {id: 8,name: "Duke Davsley", email: "ddavsley2k@pinterest.com"},
    {id: 9,name: "Jimmy Weld", email: "jweld2j@tripadvisor.com"},
    {id: 10,name: "Kaylee Jakoubec", email: "kjakoubec2i@epa.gov"}
]

// 4-1. 모든 movies를 반환하는 개발을 한다. 단, movie를 작성한 user의 이름을 포함해라.

const movieUser = movies.map(movie => ({
    ...movie,
    name: users.find(user => user.id === movie.user_id).name
}))
console.log(movieUser);

// 4-2. id가 1번에 해당하는 user가 작성한 영화 movie_title로만 이루어진 배열을 가져온다.

const user1Movies = movies.filter(movie => movie.user_id === 1)
.map(movie => movie.movie_title)
console.log(user1Movies)

// 4-3. Looney Tunes: Back in Action라는 movie_title을 가진 게시물의 작성자의 이메일을 가져온다.

const writer = movies.find(movie => movie.movie_title === 'Looney Tunes: Back in Action').user_id
const email = users.find(user => user.id === writer).email
console.log(email)