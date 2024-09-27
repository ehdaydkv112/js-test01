//강사님 문제
//1번
//함수 이름 type_check를 만든다.
// 매개변수로 a를 받아서,
// a가 자료형이 숫자라면
// for문을 만들어서 a만큼 반복문을 돌려야한다.
// 반복문의 코드 블럭은 console.log('반복중: '+ i) 이다.
// 모든 반복이 끝나면 "숫자 반복문 끝"을 return 한다.

// a가 자료형이 문자열이라면
// 객체를 만들고,
// 그 객체에 text라는 key에 a를 value로 담아서, return한다.
//
//1번답안
function type_check(a) {
  if (typeof a === 'number') {
    for (let i = 0; i < a; i++) {
      console.log('반복중' + i);
    }
    return "숫자 반복문 끝"
  }
};

// 2번 문제
// 함수 find_largest_number 를 만듭니다.
// 세 개의 숫자 x, y, z를 입력받습니다.
// if 문을 사용하여 가장 큰 숫자를 찾아 반환합니다.

//2번 답안
function find_largest_number(x, y, z) {
  if(x >= y && x >= z) {
    largest = x;
  } else if (y >= x && y >= z) {
    largest = y;
  } else {
    largest = z;
  }
  return largest;
}

// 3번 문제
// 함수 find_longest_word를 만듭니다.
// 문자열 str을 입력받습니다.
// 문자열 안에 있는 단어들 중 가장 긴 단어를 반환합니다.
// 공백으로 단어를 나누며, 같은 길이의 단어가 여러 개일 경우 첫 번째 단어를 반환합니다.

// 출력 예시)
// find_longest_word("add good life") => "good"
// find_longest_word("add good lifeAll") => "lifeAll"

function find_longest_word(str) {
  const words = str.split(' ');
  let longestWord = '';

  for (let word of words) {
    if(word.length > longestWord.length) {
      longestWord = word;
    } 
  }
  return longestWord;
};
console.log(find_longest_word("add good life"));
console.log(find_longest_word("add good lifeAll")) ;

// 두봉님 문제
//문제 1번 줄임말 대잔치

const fullWords = [
  '겉은 바삭하고 속은 촉촉한',
  '아이스 바닐라 라떼',
  '얼어 죽어도 아이스',
  '별결 다 줄인다',
  '만나서 반가워 잘 부탁해'
];