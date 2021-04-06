//호이스팅
travel = 'No plan';
var travel;
console.log(travel); //출력 결과는 undefined일까? -> "No plan"이다.

function travel() {
    console.log('Traveling');
}
travel(); // 출력결과는 Traveling일까? -> "Uncaught TypeError"
//'함수명()'은 함수를 호출하는 명령문이다. 이게 없으면 함수 실행 안됨.

//자바스크립트 인터프리터는 위 코드를 아래와 같이 이해한다.
//함수선언을 최상위로 위치시킨다.

function travel() {
    console.log('Traveling');
}

// 변수 선언은 함수 선언 아래에 위치시킨다.
var travel;
travel = 'No plan';

console.log(travel); // No plan 출력
travel(); // Uncaught TypeError:  travel is not a function 출력
//var travel = function() {}와 같은 함수 표현식은 변수 선언이기도 하기에 함수선언처럼 최상위로 이동안됨.

