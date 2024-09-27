/* 
    함수 이름 type_check를 만든다.

    매개변수로 a를 받는다.
    for 문을 사용하여 1부터 n까지의 숫자를 출력한다.
    출력한 숫자를 모두 더한다.
*/

function type_check(a) {
    let x =0;
    for(i = 1; i<=a; i++) {
        x = x + i;
    }
    console.log(x);
}

type_check(4);

