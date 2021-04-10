//전개구문

//ES6에서 3점 표기법(...)을 함수 선언 내에 사용하면 나머지 매개변수(rest parameter)를 정의가능
//이 표기법을 배열에서 사용하면 배열요소를 전개시킴
//이 방법으로 배열의 각요소를 함수에 전달 가능
//이것은 배열 리터럴 내에 사용가능

let urgentTasks = ['Buy three tickets'];
let normalTasks = ['Book a hotel', 'Rent a car'];

//전개구문(spread Syntax)로 urgentTask배열과 normalTasks배열을 확장함
let allTasks = [...urgentTasks, ...normalTasks];

((first, second) => {
    console.log('Working on ' + first + ' and ' + second)
    //전개구문으로 allTasks배열을 확장 및 함수의 인자로 각 요소를 전달함 (first,second)
})(... allTasks);

//first인자는 'Buy three tickets'
//second인자는 'Book a hotel' 값을 가진다



