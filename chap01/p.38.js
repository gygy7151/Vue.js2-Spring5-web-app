// 매개변수 기본값
// ES6에서 함수 매개변수의 기본값을 정의 가능
// ES5에서 동일구현이 코드 가독성 떨어뜨림

// ES6
const shoppingCart = [];
function addToCart(item, size = 1) {
    shoppingCart.push({ item: item, count: size});
}

addToCart('Apple');             //size는 1
addToCart('Orange', 2)          //size는 2


// ES5에서 addToCart와 동일한 함수코드
function addToCart(item, size) {
    size = (typeof size != 'undefined') ? size : 1;
    shoppingCart.push({ item: item, count: size})
}
//->위 코드는 ES6의 매개변수 기본값을 활용하여 가독성 향상 및 코드를 더 쉽게 유지 보수가능케함

//나머지 매개변수
// ES5에선 함수 본문내에 함수의 매개변수들을 반복하는데 arguments 객체를 이용할 수 있다.
// ES6에선 나머지 매개변수(rest parameters)구문으로 무한개의 매개변수를 배열로 정의함.

// ES5에서 arguments활용
function workout(exercise1) {
    var todos = Array.prototype.slice.call(arguements, workout.length);
    console.log('Start from ' + exercise1);
    console.log(todos.length + ' more to do');
}
// ES6에서 나머지 매개변수 활용
// todos라는 나머지 매개변수 정의함(3개의 점으로 시작하며 마지막은 workout()함수의 매개변수명)
function workout(exercise1, ...todos) {
    console.log('Start from ' + exercise1);  //Start from Treadmill 출력
    console.log(todos.length + ' more to do'); // 2 more to do 출력
    console.log('Args length: ' + workout.length); //Args length: 1출력
}
workout('Treadmill', 'Pushup', 'Spinning');
