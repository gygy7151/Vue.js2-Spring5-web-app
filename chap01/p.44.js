// 템플릿 리터럴 
//문자열 리터럴에 표현식 포함 및 여러라인 지원
//아래 문자열을 그룹화할때 역따옴표

// macOS Sierra에서 업데이트 후 키보드 한글 입력 상태에서는 백 쿼트(`) 키를 누르면 원화(₩)가 입력된다.

//한글 입력 상태에서는 옵션키와 함께 백 쿼트(`)키를 눌러야 백 쿼트(`)를 입력 할 수 있다.
// 마크다운 문서를 작성하는 사람이나 개발자에게는 매우 불편하다.

// # 해결 방법
// ~/Library 폴더로 이동해서 KeyBindings 폴더를 추가한다.
// ~/Library/KeyBindings 폴더에 DefaultkeyBinding.dict 파일을 만든다.
// DefaultkeyBinding.dict 파일에 아래의 코드를 추가한다.
// {
//     "₩" = ("insertText:", "`"); -> 영어키보드일때만 변화가능함.
// }
// 각 애플리케이션들을 새로 실행하면 한글 입력 상태에서도 백 쿼트(`)가 입력되는 것을 확인할 수 있다.

let user = {
    name: 'Ted',
    greeting () {
        console.log(`Hello, I'm ${this.name}.`);
    }
};
user.greeting();       //Hello, I'm Ted. 출력
// ${...}구문을 사용해 this로 해당 실행 컨텍스트에 접근가능

//여러라인으로 사용한 다른예제
let greeting = `Hello, I'm ${user.name}.
Welcome to the team!`;
console.log(greeting);  // Hello, I'm Ted.
                        // Welcome to the team! 출력

//주의 : 역따옴표 문자 내부에 있는 모든 공백도 출력된다.
//아래와 같이 들여쓰면 출력결과가 보기 안좋음

let greeting = `Hello, I'm ${user.name}.
                Welcome to the team!`;
console.log(greeting);  // Hello, I'm Ted.
                        //                  Welcome to the team! 출력

                        