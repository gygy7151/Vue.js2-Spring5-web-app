//this 키워드

function User (name) { //User생성함수는 전역스코프(global Scope)에서 호출가능
    console.log('I\'m in "' + this.constructor.name + '" context. ');
    this.name = name;
    this.speak = function () {
        console.log(this.name + ' is speaking from "' +
        this.constructor.name + '" context.');
        var drink = function () { //speak내에 변수 생성
            console.log('Drinking in "' + this.constructor.name + '"');
        }
        drink();
    };
    function ask() { //User생성자 함수의 메인함수코드
        console.log('Asking from "' +
            this.constructor.name + '"    context.');
        console.log('Who am I?"' + this.name + '"');
    }
    ask(); 
    // Asking from "Window" context.
    // Who am I? "Unknown"
    ask.call(this); //call() 메소드는 Function객체에 의해 생성된 메소드이자 객체임 ex> call(), apply(), bind가 있음
    // Asking from "User" context.
    // Who am I? "Ted"

    ask.bind(this)();
    // Asking from "User" context.
    // Who am I? "Ted"
    //bind는 새로운 함수의 실행 컨텍스트로 전달받은 첫번째 인자와 바인딩될 새로운 함수를 생성한다. 
    //또한 즉시 실행이외에도 새로운 함수 또는 변소를 객체의 메소드로 할당할 수 있다.
}
var name = 'Unknown'; //여기부터 전역 코드 : 자바스크립트 프로그램이 시작되는 곳부터 수행되는 코드. 브라우저의 경우 Window 객체가 존재한다.
var user = new User('Ted');
user.speak();
// Ted is speaking from "User" context.
// Drinking in "Window" context.

user.speak.apply({name: 'Jack'})
// Jack is speaking from "Object" context.
// Drinking in "Window" context.
//실행 컨텍스트를 변경하는 방법으로 call()과 apply()메소드를 고려할 수 있다.
 