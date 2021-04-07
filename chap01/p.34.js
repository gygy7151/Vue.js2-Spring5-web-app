//화살표함수와 ES5의 차이점
// 1. 분리된 실행 컨텍스트를 가지는 ES5 함수와는 달리, 자신의 this를 미보유
// 2. 화살표 함수는 상위스코프의 실행컨텍스트를 사용

//장바구니 예제(Shopping cart)
var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0},
    checkout() {
        this.items.forEach(item=> { //여기서 this는 shoppingCart 객체 자신을 참조 + Array.prototype.forEach() 메소드의 콜백 내부에서도 참조
            if (!this.inventory[item]) {
                console.log('Item ' + item + 'has sold out.');
            }
        })
    }
}

shoppingCart.checkout();


// ES5 code
var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0 },
    checkout() { 
        // 컨텍스트를 재할당(이를 콜백이라고 명명 call back)하고 forEach에 전달한 콜백에서
        // 참조할 수 있도록 클로저를 활용한다.
        var that = this;
        this.itemsforEach(function (item) {
            if (!that.inventory[item]) {
                console.log('Item ' + item + ' has sold out.');
    
            }
        })
    }
}
shoppingCart.checkout();

// 3. 화살표함수는 분리된 실행 컨텍스트를 미보유
// -> Function.prototype.call(), Function.prototype.apply(), Function.prototype.bind()
// 위 세가지  메소드 활용해 호출시 첫번째 인자로 전달받은 실행컨텍스트는 무시됨

var name = "Unknown";
var greeting = () => {
    console.log('Hi, I\'m ' + this.name); //// 화살표함수에서 this는 항상 상위 스코프의 실행 컨텍스트로 해석됨
};

greeting.call({ name: 'Sunny'});            // I'm Unknown 출력
gretting.apply({ name: 'Tod'});             // I'm Unknown 출력
var newGreeting = greeting.bind({ name: 'James'});
newGreeting();                              // I'm Unknown 출력

// ES5의 함수와 달리 화살표 함수는 자신의 arguments 객체 미보유
// arguments객체는 상위 스코프 함수의 arguments 객체를 가르킴

// 4. 화살표함수는 객체의 메소드를 정의하는데 부적합 <- 화살표함수는 상위스코프의 실행컨텍스트를 이용하기 때문
// 계산 Checkout(계산)하는데 화살표함수 활용 장바구니 예제
// 객체 리터럴로 작성
var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0},
    checkout: () => { //checkout을 화살표함수로 변경 -> "'forEach' of undefined."에러를 던짐 <- 63번라인의 this는 더이상 shoppingCart객체 미참조
        this.items.forEach(item => {
            if (!this.inventory[item]) {
                console.log('Item ' + item + ' has sold out.');
            }
        })
    }
}
shoppingCart.checkout();
//"Uncaught TypeError: Cannot read property 'forEach" of undefined." 

class User {
    consructor(name) {
        this.name =  name;
    }
}
// this는 user객체를 미참조 대신 전역 컨텍스트 참조
User.prototype.swim = () => {
    console.log(this.name + ' is swimming');
};

var user = new User();
console.log(user.swim());           // is swimming 출력

// 5. 프로토타입 객체를 가지지 않는다 = 생성자 함수 미포함 = new연산자 호출불가
const WorkoutPlan = () => {};
// Uncaught TypeError: WorkoutPlan is not a constructor 출력
let workutPlan = new WorkoutPlan();
console.log(WorkoutPlan.prototype);             //undefined 출력






