//중첩 비구조화
//복잡한 중첩 데이터구조를 간결한 구문으로 표현하는데 객체리터럴과 배열리터럴을 활용
//깊게 중첩된 데이터 구조에 변수를 선택시 비구조화 할당 사용가능

// 1> 배열에서 프로퍼티를 비구조화 하는 첫번째 방법
let user = {name: 'Sunny', interests:['Traveling', 'Swimming']};
//비구조화 할당내에 interests가 있음에도 불구하고 js는 비선언
let {interests: [,second]} = user;
console.log(second);        // Swimming 출력
console.log(interests);     // ReferenceError 출력
//ReferenceError 출력이유는 js가 콜론(:)의 왼쪽부분을 이용해 프로퍼티 값을 추출하고
//오른쪽 부분을 이용해 더 많은 비구조화 할당을 수행함
//interests프로퍼티를 추출하는 방법
let {interests} = user; 
console.log(interests); // ['Traveling', 'Swimming']


// 2> 배열에서 프로퍼티를 비구조화 하는 또 다른 방법
const fruits = [{name: 'Apple', price:100}, {name:'Orange', price:80}];
let [,{name: secondFruitName}] = fruits;
console.log(secondFruitName); //Orange 



