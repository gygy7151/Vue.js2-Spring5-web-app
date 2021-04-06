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
}
var name = 'Unknown'; //여기부터 전역 코드 : 자바스크립트 프로그램이 시작되는 곳부터 수행되는 코드. 브라우저의 경우 Window 객체가 존재한다.
var user = new User('Ted');
user.speak();