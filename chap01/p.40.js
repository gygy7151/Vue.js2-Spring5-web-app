//비구조화 할당
//ES6에서 destructing assignment로 배열 내의 요소, 문자열내의 문자, 객체내의 프로퍼티 분리
//배열 리터럴, 객체리터럴 비슷한 구물 활용 구분된 변수들을 할당 할 수 있음
//이를 변수 선언 또는 변수할당, 함수 매개변수 할당가능

//객체 비구조화(object destructuring)
let user = {name: 'Sunny', interests: ['Traveling', 'Swimming']};

//name변수와 interests변수는 user객체 내 같은 이름의 프로퍼티값이 할당됨
//tasks 변수는 user객체에 일치하는 프로퍼티가 없으므로 undefined가 됨
let {name, interests, tasks} = user;
console.log(name);          //Sunny 출력
console.log(interests);     //["Traveling", "Swimming"] 출력
console.log(tasks);         //undefined 출력


//tasks변수의 undefined를 피하는 방법
let {name, interests, tasks=[]} = user;
console.log(tasks);     // []출력

//객체비구조화 장점 두번째로 다른 변수명을 선택할 수 있음
//name프로퍼티값을 선택한 후 firstName 변수에 할당함
let {name: firstName} = user;
console.log(firstNAme)  //Sunny 출력

//배열 비구조화(array destructuring)
let [first, second] = ['Traveling', 'Swimming', 'Shopping'];
console.log(first);     //Traveling 출력
console.log(second);    //Swimming 출력

//변수를 건너뛰고 필요한것만 선택가능
let [,,third, fourth] = ['Traveling', 'Swimming', 'Shopping'];
console.log(third); //Shopping출력 -> 여기서 first는 'Traveling'임 [0]이랑다름
console.log(fourth); //undefined출력

//fourth가 undefined되는 방법
let [,,third, fourth = ''] = ['Traveling', 'Swimming', 'Shopping'];
console.log(fourth); // ''출력

