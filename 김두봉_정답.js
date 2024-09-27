// 강태진 강사님 1번 문제 플이
/*
1번 문제
함수 이름 type_check를 만든다.

매개변수로 a를 받아서,
a가 자료형이 숫자라면
for문을 만들어서 a만큼 반복문을 돌려야한다.
반복문의 코드 블럭은 console.log('반복중: '+ i) 이다.
모든 반복이 끝나면 "숫자 반복문 끝"을 return 한다.

a가 자료형이 문자열이라면
객체를 만들고,
그 객체에 text라는 key에 a를 value로 담아서, return한다.
*/

function type_check(a)
{
  if(typeof(a) === 'string') {
    let strObj = {
      text: value1
    };

    return strObj.text = a;
  }
  else if(typeof(a) === 'number') {
    for(i=0; i<a; i++)
      console.log('반복중: '+ i);

    return "숫자 반복문 끝";
  }
}

console.log(type_check('abc'));
console.log(type_check(5));


/*
2번 문제
함수 find_largest_number 를 만듭니다.
세 개의 숫자 x, y, z를 입력받습니다.
if 문을 사용하여 가장 큰 숫자를 찾아 반환합니다.
*/
function find_largest_number(x,y,z){

    if( x>y && x>z)
      return x;
    else if(y>x && y>z)
      return y;
    else if(z>x && z>y)
      return z;
    else
     return undefined;
}

console.log(find_largest_number(1,30,22));


/*
3번 문제
함수 find_longest_word를 만듭니다.
문자열 str을 입력받습니다.
문자열 안에 있는 단어들 중 가장 긴 단어를 반환합니다.
공백으로 단어를 나누며, 같은 길이의 단어가 여러 개일 경우 첫 번째 단어를 반환합니다.

출력 예시)
find_longest_word("add good life") => "good"
find_longest_word("add good lifeAll") => "lifeAll"
*/
function find_longest_word(str) {
  const arr = str.split(" ");
  
  let max_index = 0;
  for(i=0; i<arr.length; i++)
  {    
    if(arr[i].length > max_index)
      max_index = i;
  }

  return arr[max_index];

}





// 김성수님 문제 풀이
//1번
// 함수 abc_string을 만든다.abc_string을 만든다.
// 1. 매개변수 a,b를 받는다.
// 2. 함수 안에 변수 ab_string을 만든다.
// 3. 변수 ab_string에 매개변수 a,b를 더하고 반환한다. 
function abc_string(a, b){
  let ab_string = a + b;
  return ab_string;
}


//2번
// 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

// 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
// skip에 있는 알파벳은 제외하고 건너뜁니다.
// 예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, a에서 5만큼 
// 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 
// 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 
// 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

// 두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.


// 5 ≤ s의 길이 ≤ 50
// 1 ≤ skip의 길이 ≤ 10
// s와 skip은 알파벳 소문자로만 이루어져 있습니다.
// skip에 포함되는 알파벳은 s에 포함되지 않습니다.
// 1 ≤ index ≤ 20

// >>>>>>>>>>>>>>> pass <<<<<<<<<<<<<<<<<<



//3번
// 수웅이는 매달 주어진 음식을 빨리 먹는 푸드 파이트 대회를 개최합니다. 
// 이 대회에서 선수들은 1대 1로 대결하며, 매 대결마다 음식의 종류와 양이 바뀝니다. 
// 대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 
// 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다. 
// 중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.

// 이때, 대회의 공정성을 위해 두 선수가 먹는 음식의 종류와 양이 같아야 하며, 
// 음식을 먹는 순서도 같아야 합니다. 또한, 이번 대회부터는 칼로리가 낮은 음식을 
// 먼저 먹을 수 있게 배치하여 선수들이 음식을 더 잘 먹을 수 있게 하려고 합니다. 
// 이번 대회를 위해 수웅이는 음식을 주문했는데, 대회의 조건을 고려하지 않고 
// 음식을 주문하여 몇 개의 음식은 대회에 사용하지 못하게 되었습니다.

// 예를 들어, 3가지의 음식이 준비되어 있으며, 칼로리가 적은 순서대로 1번 음식을 3개, 
// 2번 음식을 4개, 3번 음식을 6개 준비했으며, 물을 편의상 0번 음식이라고 칭한다면, 
// 두 선수는 1번 음식 1개, 2번 음식 2개, 3번 음식 3개씩을 먹게 되므로 음식의 배치는 
// "1223330333221"이 됩니다. 따라서 1번 음식 1개는 대회에 사용하지 못합니다.

// 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 
// 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

// 2 ≤ food의 길이 ≤ 9
// 1 ≤ food의 각 원소 ≤ 1,000
// food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
// food[i]는 i번 음식의 수입니다.
// food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
// 정답의 길이가 3 이상인 경우만 입력으로 주어집니다.

// >>>>>>>>>>>>>>> pass <<<<<<<<<<<<<<<<<<




// 박수환님 문제 풀이
/*
함수이름 boo 로 생성해주세요
매개변수 1~5 가 들어있는 베열로 받아주세요, 배열이름은 arr로 해주세요
배열 요소 중 3이상만 출력해주세요
*/


function boo (numArr) {
  for(let i=0; i<numArr.length; i++)
    if(numArr[i] >= 3)
      console.log(numArr[i]);
}

let arr = [1,2,3,4,5];
boo(arr);

// --------------------------------------------------



/*
문제2 . 
1. 함수 good을 만들어주세요
2. 매개변수 n을 할당받습니다.
3. n이 소수일경우에 "소수입니다."    /  소수가 아닐경우에 "소수가 아닙니다." 를 출력해주세요

*/
function good(N) {
  
  // 1은 소수가 아니다.
  if (N === 1) return false;

  // 2부터 N제곱근까지의 수로 N을 나눴을 때
  for (let i = 2; i <= Math.sqrt(N); i++) {
    // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
    if (N % i === 0) return false;
  }

  // 모두 나누어 떨어지지 않으면 N은 소수이다.
  return true;
}



/* 정유석님 문제 풀이
[1번문제]

반복문을 사용하여 팀 이름과 인원수를 출력해주세요


배열 team과 배열 people 있습니다.
팀의 이름과 팀의 인원수의 배열은 각각 다음과 같습니다.

const team = ["team1", "team2", "team3", "team4"];
const people = [5, 7, 7, 4];

출력예시)
"team1의 인원수는 5명입니다."

*/

const team = ["team1", "team2", "team3", "team4"];
const people = [5, 7, 7, 4];

for(let i=0; i< team.length; i++) {
  console.log(`{${team[i]}의 인원수는 ${people[i]}입니다.`)
}



// 강수정님 문제 풀이
/* 
    함수 이름 type_check를 만든다.

    매개변수로 a를 받는다.
    for 문을 사용하여 1부터 n까지의 숫자를 출력한다.
    출력한 숫자를 모두 더한다.
*/

function type_check(n) {
  let sum = 0;
  for(let i = 0; i<n; i++)
  {
    console.log(i+1);
    sum += (i+1);
  }  
}


// 김혁진님 문제 풀이

// 1. 홀수와 짝수 판별 함수
// 숫자를 입력받아, 해당 숫자가 홀수인지 짝수인지 출력하는 함수를 만드세요.


function checkOddOrEven(num) {

  if(num%2 === 0)
    console.log("Even");  
  else
    console.log("Odd");
}

checkOddOrEven(5); // "Odd"
checkOddOrEven(8); // "Even"
