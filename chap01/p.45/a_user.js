// 모듈

// ES6에서 js는 언어차원에서 module을 지원
// 모듈을 구성하고 정적 모듈 구조를 만드는데 export와 import를 사용
// 컴파일 시점에서 가져오기(import)와 (Export)를 결정
// ES6 모듈의 또 다른 중요한 특징은 가져오기와 내보내기에 대한 선언이 최상위 위치해야됨
// ifdhk try/catch 구문과 같은 블록내에 넣을 수 없음

// 모듈을 생성하기위해 해야 할일은 js코드를 .js 파일에 넣는것이다.
// 바벨이나 웹팩과 같은 도구를 활용해 ES6코드를 ES5로 컴파일할 수 있음
// 모듈파일이용하는 방법은 <script type ="module">으로 모듈 파일을 브라우저로 불러옴

// 내보내기 Export
// 모듈 내부에서 아무것도 내보내지 않을 것을 선택가능
// 원시 값과, 함수, 클래스, 객체 내보내기 가능
// 내보내기는 총 2가지
// 첫번째는 동일 모듈에 여러개의 명명된 내보내기 방법
// 두번째는 하나의 모듈에 하나의 기본 내보내기 방법

// 아래는 User 클래스를 내보내는 user.js모듈과 완료된 업무의 총 건수를 파악 task.js모듈
// 역할 상수를 내보내는 role.js 모듈 만들기

// user.js파일
export default class User {
    constructor (name, role) {
        this.name =  name;
        this.role = role;
    }
}

// User클래스 앞에 export와 default 키워드를 붙여 기본 내보내기로 User 클래스를 내보냄

