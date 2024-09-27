// 박수환 문제 정답

// const arr = [1,2,3,4,5];

// function boo(arr){
//     array.forEach(i => {
//         if( arr[i] >= 3){
//             console.log(i);
//         }
//     });
//     return;
// };

// boo();


// function good(n){
//     for(let i = 2; n > i; i++){
//         if(n % i === 0){
//             console.log('소수입니다.');
//         } else {
//             console.log('소수가 아닙니다.');
//         };
//     };
// };

/// 강태진 문제 정답
//1번
// function type_check(a){
//     if( a === Number){
//         for( let i = 0; i < a.length; i++){
//             console.log('반복중: ' + i);
//             console.log('숫자 반복문 끝');
//             return;
//         };
//     };
// };

//2번
// function find_largest_number(x, y, z){
//     let max;
//     if( x > z ){
//         if( x > z){
//             max = x;
//         } else{
//             max = z;
//         } else {
//             if( y > z){
//                 max = y;
//             } else {
//                 max = z;
//             }
//         }
//     }
//     return;
// }

// console.log(find_largest_numb(1,2,3));

// 3번
 function find_longest_word(str){
   let max = arr[0];
   for(let i =1; i < arr.length; i++){
    if(arr[i].length > max.length){
        max = arr[i];
    }
   }
   return max;
 }

 console.log(find_longest_word('shdkf', 'feadfdasfewa', 'asf'))