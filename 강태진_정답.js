// 동재 1번
let someNumber = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) someNumber += i;
}

// 동재 2번
console.log(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);

// 동재 3번
let data = [
  { number: 0, ID: "a", gender: "남", age: 25 },
  { number: 1, ID: "b", gender: "남", 나이: 19 },
  { number: 2, ID: "c", gender: "여", 나이: 25 },
  { number: 3, ID: "d", gender: "여", 나이: 40 },
];

const up20ageGirl = data.filter((el) => {
  if (el.gender === "여" && (el.나이 >= 20 || el.age >= 20)) return true;
  return false;
});

// 수정님 문제
function type_check(n) {
  let some = 0;
  for (let i = 0; i < n; i++) {
    console.log(i);
    some += n;
  }
}

const fullWords = [
  "겉은 바삭하고 속은 촉촉한",
  "아이스 바닐라 라떼",
  "얼어 죽어도 아이스",
  "별결 다 줄인다",
  "만나서 반가워 잘 부탁해",
];

// 두봉님 문제
function getFirstWord(str) {
  if (!fullWords.includes(str)) return "해당 사항 없음";
  const words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i][0];
  }
  return result;
}

// 혁진님 문제
function checkOddOrEven(num) {
  if (num % 2 === 0) return "Even";
  return "Odd";
}

// 수환 문제1
function boo(num) {
  for (const numEl of num) {
    if (numEl >= 3) console.log(numEl);
  }
}

// 수환 문제2
function isPrime(num) {
  if (num === 2) return true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 지환 문제2
console.log("8 x 1 = 8");
console.log("8 x 2 = 16");
console.log("8 x 3 = 24");
console.log("8 x 4 = 32");
console.log("8 x 5 = 40");
console.log("8 x 6 = 48");
console.log("8 x 7 = 56");
console.log("8 x 8 = 64");
console.log("8 x 9 = 72");
for (let i = 0; i < 9; i++) {
  if (i === 0) continue;
  console.log(`8 x ${i} = ${8 * i}`);
}

// 유석님 문제 정답
console.log("team1의 인원수는 5명 입니다.");
console.log("team2의 인원수는 7명 입니다.");
console.log("team3의 인원수는 7명 입니다.");
console.log("team4의 인원수는 4명 입니다.");

function getTeamCount(teamArray, peopleArray) {
  if (teamArray.length !== peopleArray.length) return "뭔가 잘못되었어요";
  for (let i = 0; i < teamArray.length; i++) {
    console.log(`${teamArray[i]}의 인원수는 ${peopleArray[i]}명입니다.`);
  }
}
