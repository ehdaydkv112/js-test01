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

const type_check = (a) => {
  if (typeof a === "number") {
    for (let i = 0; i < a; i++) {
      console.log(`반복중: ${i}`)
    } return "숫자 반복문 끝"
  } else if (typeof a === "string") {
    let object = {};
    object.text = a;
    return object
  }
};

type_check(9)
console.log(type_check('love'))



// 강태진_문제2

const find_largest_number = (x, y, z) => {
  if (x >= y && x >= z) return x
  else if (y >= x && y >= z) return y
  else return z
}

const find_smallest_number = (x, y, z) => Math.min(x, y, z);

console.log(find_largest_number(9, 27, 27))
console.log(find_smallest_number(9, 27, 9))

// 