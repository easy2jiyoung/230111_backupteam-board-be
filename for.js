// for문 : 10,000부터 1까지 1씩 줄어들게
for(let i = 10000; i >= 1; i--) {
    console.log(i);
};

// for문 : 1부터 10,000까지 홀수만
// 1)
for(let j = 1; j <= 10000; j+=2) {
   console.log(j);
};
// 2)
for(let odd = 1; odd <= 10000; odd++) {
    if (odd % 2 === 1) {
        console.log(odd);
    }
}

// for문 : 구구단
// 1) 단일
for(let gugu = 2; gugu <= 9; gugu++) {
    console.log(`${gugu} * 1 = ${gugu*1}`);
    console.log(`${gugu} * 2 = ${gugu*2}`);
    console.log(`${gugu} * 3 = ${gugu*3}`);
    console.log(`${gugu} * 4 = ${gugu*4}`);
    console.log(`${gugu} * 5 = ${gugu*5}`);
    console.log(`${gugu} * 6 = ${gugu*6}`);
    console.log(`${gugu} * 7 = ${gugu*7}`);
    console.log(`${gugu} * 8 = ${gugu*8}`);
    console.log(`${gugu} * 9 = ${gugu*9}`);
};
// 2) 이중
for(let gu = 2; gu <= 9; gu++) {
    console.log(gu + '단')
    for(let gu2 = 1; gu2 <= 9; gu2++) {
        console.log(gu + '*' + gu2 + '=' + (gu*gu2))
    }
}