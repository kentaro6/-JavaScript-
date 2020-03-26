'use strict';

console.log('hello');

console.log(typeof'hello');
console.log(typeof 4);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log(parseInt('5', 10) + 3);
console.log(parseInt('hello' , 10) + 3);//数値にできない値

const price = 1200;

console.log(price > 1000);
console.log(price < 1000);
console.log(price >= 1000);
console.log(price <= 1000);
console.log(price !== 1000);//異なる
console.log(price === 1000);

//false <- 0 ,null, undefined, '' ,   false
//true  <- それ以外

console.log(Boolean(0));
console.log(Boolean('hello'));

const score = 85;

if (score >= 80) {
  console.log('Great!');
} else {
  console.log('OK...');
}

score >= 80 ? console.log('Great!') : console.log('OK...')//違う書き方

const score1 = 60;
const name = 'taguchi';

if (score1 >= 50) {
  if (name === 'taguchi') {
    console.log('Good job!');
  }
}

// &&　なおかつ
// || もしくは
// ! 〜ではない

if (score1 >= 50 && name === 'tagu') {
  console.log('Good job!');
} else {
  console.log('違うよ')
}

const signal = 'pink';

switch (signal) {
  case 'red':
    console.log('Stop!!');
    break;
  case 'yellow':
    console.log('Caution!!');
    break;
  case 'blue':
  case 'green':
    console.log('Go!!');
    break;
  default://どれとも当てはまらない
      console.log('Wrong signal!')
      break;
}

for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  // console.log('hello' + i);
  console.log(`hello ${i}`);
}

// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

let hp = -50;

do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0)




for (let i = 1; i <= 10; i++) {
  // if (i === 4) { //4をスキップ
  // if (i % 3 === 0) { //3の倍数をスキップ
  //   continue;
  // }
  if (i === 4) {
    break;
  }
  console.log(i);
}


function showAd(message = 'Ad') { //仮引数
  console.log('--------')
  console.log(`---${message}---`)
  console.log('--------')
}

showAd('Headear Ad');// 実引数
console.log('Bob is great!');
// showAd('Ad');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');




// function sum(a, b, c) {  //関数宣言
//   return a + b + c; 
// }
// const sum =  function(a, b, c) {  // 関数式
//   return a + b + c; 
// };
const sum = (a, b, c)　=>  a + b + c;


const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);


// const double = function(a) {
//   return a * 2;
// };
const double = a => a * 2;
console.log(double(12));




const x = 2;      //グローバルスコープ

function f() {
  const x = 1;
  console.log(x);
}

f();
console.log(x);


{
  const y = 100;
  console.log(y);
}