//js030_array.js

const ftuits = ["Banana", "Orange", "Apple", "Mango"];
console.log(ftuits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ] - 배열은 대괄호로 묶여서 출력
let data = ftuits.toString();
console.log(`${data}`); //Banana,Orange,Apple,Mango - string으로 변환되서 출력되면 대괄호가 사라짐
console.log(`${typeof data}`); //string

console.log(typeof ftuits.join()); //string
console.log(ftuits.join()); //Banana,Orange,Apple,Mango
console.log(ftuits.join("*")); //Banana*Orange*Apple*Mango
console.log(ftuits.join("_")); //Banana_Orange_Apple_Mango
//.join() : 배열 안의 요소를 가져올때 요소 구분을 ,(쉼표)말고 다른 표시로 출력하고 싶을 때

//
//배열의 끝에 요소 추가
ftuits[4] = "Kiwi";
console.log(ftuits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(ftuits.push("Melon")); //6
//.push() : 배열의 끝에 ()소괄호안의 새로운 요소값을 추가해주고, 배열의 길이값을 출력함
console.log(ftuits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]

//
//배열의 끝에 요소를 제거
//.pop() : 배열 끝의 요소를 꺼내와 출력하고, 배열에서 제거함
console.log(ftuits.pop()); //Melon
console.log(ftuits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//
//배열의 앞에 요소를 추가
console.log(ftuits.unshift("Melon")); //6
//.unshift() : 배열의 앞에 ()소괄호안의 새로운 요소값을 추가해주고, 배열의 길이값을 출력함
console.log(ftuits); //[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//
//배열 앞에 요소를 제거
//.shift() : 배열 앞의 요소를 꺼내와 출력하고, 배열에서 제거함
console.log(ftuits.shift()); //Melon
console.log(ftuits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//
//특정 위치의 요소 제거 (자리는 확보하고 있음)
//delete ____[인덱스 값] : 해당 인덱스값에 위치한 요소값이 제거되지만, 자리는 남아있음
delete ftuits[3];
console.log(ftuits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]

ftuits[3] = "Mango";
console.log(ftuits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//
//특정 범위의 요소를 가져옴 (배열에서 제거되지 않음)
console.log(ftuits.slice(1, 3)); //[ 'Orange', 'Apple' ]
console.log(ftuits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(ftuits.slice(-4, -2)); //[ 'Orange', 'Apple' ]
console.log(ftuits);

console.log(ftuits.slice(1)); //[ 'Orange', 'Apple', 'Mango', 'Kiwi' ] - 끝나는 인덱스를 지정하지 않아서 시작 지정한 1번 인덱스부터 끝까지 출력

//
//오름차순 정렬 : 배열에서도 바뀜
console.log(ftuits.sort()); //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]
console.log(ftuits); //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]

//
//내림차순 정렬 : 배열에서도 바뀜 (내림차순 명령어는 따로 없지만, 오름차순 정렬 후 리버스로 뒤집어 준다)
console.log(ftuits.sort().reverse()); //[ 'Orange', 'Mango', 'Kiwi', 'Banana', 'Apple' ]
console.log(ftuits); //[ 'Orange', 'Mango', 'Kiwi', 'Banana', 'Apple' ]

//
//javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
//Tim Sort는 Insertion Sort와 Merge Sort를 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 : http://d2.naver.com/helloworld/0315536
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); // [ 1, 5, 10, 40, 100 ]

//오름차순
console.log(
  point.sort(function (a, b) {
    console.log(`a:${a}, b:${b},a-b:${a - b}`);
    return a - b;
  })
);

//내림차순
console.log(
  point.sort(function (a, b) {
    //console.log(`a:${a}, b:${b},a-b:${a - b}`);
    return b - a;
  })
);

//
//
//.concat() : 배열 결합하기
let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length); //
console.log(zData); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//
let arr2 = [1, 3, [[[4, 5]]], [7, 8], [9, 10], 12];
console.log(arr2.flat()); //[ 1, 3, [ [ 4, 5 ] ], 7, 8, 9, 10, 12 ]
console.log(arr2); //[ 1, 3, [ [ [Array] ] ], [ 7, 8 ], [ 9, 10 ], 12 ]
console.log(arr2.flat(1)); //[ 1, 3, [ [ 4, 5 ] ], 7, 8, 9, 10, 12 ]
console.log(arr2.flat(2)); //[ 1, 3, [ 4, 5 ], 7, 8, 9, 10, 12 ]
console.log(arr2.flat(3)); //[1, 3,  4,  5, 7, 8, 9, 10, 12 ]
