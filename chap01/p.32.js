//강화된 객체 리터럴 
// ES6에서 객체리터럴은 총5가지 기능을 지원
// 1. 프로토타입설정
// 2. 프로퍼티 축약표현
// 3. 메소드 축약표현
// 4. super 호출
// 5. 표현식을 이용한 프로퍼티 계산 기능

//TeamMember객체를 프로토타입으로 가지는 advisor 객체 생성
const advice = 'Stay hungry. Stay foolish.';

let advisor = {
    //TeamMember객체를 advisor 객체의 __proto__ 프로퍼티로 할당해 advisor를 TeammMember의 인스턴스로 생성
    __proto__: new TeamMember('Adam', ['Consulting']),  // 프로토타입 설정

    //advice:advice의 프로퍼티 축약표현
    advice,                                             // 프로퍼티 축약 표현

    //greeting 메소드 생성
    greeting() {                                        // 메소드 축약 표현
        super.greeting();                               // super 메소드 호출
        console.log(this.advice);
    },

    //"Stay hungry"프로퍼티는 대괄호 표기법으로 계산된 이름
    //이프로퍼티에 접근하려면 공백이 포함되어 advisor['Stay hungry']와 같이 대괄호 표기법을 사용해야만 함.
    [advice.split('.')[0]]: 'Always learn more'         // 계산된 프로퍼티 이름
};

console.log(TeamMember.prototype.isPrototypeOf(advisor));   //true출력
console.log(advisor instanceof TeamMember);                 //true출력

advisor.greeting();         // I'm Adam. Welcome to the team!
                            // Stay hungry. Stay foolish. 출력



