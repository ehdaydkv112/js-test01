// 강수정_문제

// function type_check(a) {
//   let temp = 0;
//   for (let i = 0; i <= a; i++) {
//     return temp += i
//   }
// }



// 김혁진_문제

// function checkOddOrEven(num) {
//   if (num % 2 === 0) {
//     console.log("Even")
//   } else console.log("Odd");
// }



// 강태진_문제1

function type_check(a) {
  if (typeof a === "number") {
    for (let i = 0; i < a; i++) {
      console.log(`반복중: ${i}`)
    } return "숫자 반복문 끝"
  } else if (typeof a === "string") {
    let object = {};
    object.text = a;
    return object
  }
}

// test
type_check(9)
console.log(type_check('love'))