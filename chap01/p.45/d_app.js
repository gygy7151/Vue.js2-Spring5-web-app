// a_user.js,b_tasks.js,c_reole.js 에서 생성한 모듈을 가져오는(import)모듈 만들어보자

//User이외에 다른 이름을 사용할 수 있음
import User from './a_user.js';
//기본가져오기는 기본 내보내기에서 사용한 이름과 일치하지 않아도된다.
import * as Roles from './c_role.js';
//ES6모듈은 싱글톤이기때문에 두번가져오기를 해도 한번만 평가함
// import completeTask from './b_tasks.js';
// import {completedCount} from './b_tasks.js';

//7,8번라인과 같은코드는 아래와 동일 = 기본가져오기(default import)와 (named import)를 함께 작성가능
import completeTask, {completedCount} from './b_tasks.js'

//만약 모듈에서 다른 로컬이름과 충돌한다면 가져오기 이름 변경가능
//completedCount를 totalCompletedTasks로 변경가능
//import {completedCount as totalCompletedTasks} from './taks.js';

//점표기법으로 명명된 내보내기를 role.js모듈에 접근함
let user = new User('Ted', Roles.USER);

//completedTask함수 호출하고 tasks.js모듈의 completedCount를 증가시킴
completedTask(user);

//19,20번라인도 의존관계를 한눈에 볼 수 있도록 모듈의 상단에 모든 가져오기 코드를 작성하는것이 좋음
//but 아래 방식은 비권장방법
// let user = new User('Ted', Roles.USER);
// import User from './a_user.js'

//20번내용 때문에 completedCount의 업데이트 값을 확인할수 있음
console.log(`Total completed ${completedCount}`);
// completedCount++; <-주석처리한 이유는 동작하지 않아서.
// 가져온 객체를 변경할 수 있다는 것만 보여준다.
// 하지만 좋은 사례는 아니다.

//기존 User객체에 메소드가 없었는데 walk() 메소드를 가지게 됨 가져온 모듈의 내용 변경가능함 -> but 재할당은 불가

User.prototype.walk = function () {
    console.log(`${this.name} walks`);
};

user.walk();


//가져오기 선언의 목적
// 1. js엔진에서 가져와야 할 모듈이 무엇인지 알려주는 기능
// 2. js에 다른 모듈의 내보낸 이름이 무엇인지 알려주는 기능 -> js는 그 이름으로 상수를 만들것 

// ES6부터 자바스크립트에는 스크립트(script)와 모듈(modules)의 두가지 형태 존재
// strict모드로 코드를 렌더링하려면 파일의 최상위에 'use strict';를 넣어야 모듈실행코드 자동 strict모드로 실행됨
// 모듈의 최상위 변수는 외부에서 내보내기 하지 않는 한 해당 모듈의 로컬 변수임
// 모듈의 최상위에서 this는 undefined를 가리킴
// 브라우저에서 모듈 내부의 window 객체에 여전히 접근 가능

