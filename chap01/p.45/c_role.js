// 인라인 방식으로 export를 선언하는 대신
// User 클래스를 먼저 선언한 후
// 다음 모듈의 맨 아래 또는 모듈 최상위, User클래스 이전에서도 내보내기 가능

//상수 2개를 생성
const DEFAULT_ROLE = 'User';
const ADMIN = 'Admin';

export {DEFAULT_ROLE as USER, ADMIN};
// 중괄호로 객체를 감쌋다고 객체를 내보낸것으로 생각하면 안됨
// DEFAULT_ROLE은 USER로 객체명 변경가능


