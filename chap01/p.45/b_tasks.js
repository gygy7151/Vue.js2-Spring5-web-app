console.log('Inside tasks module');
//completeTask함수를 기본 내보내기
export default function completeTask(user) {
    console.log(`${user.name} completed a task`);
    completedCount++;
}

// 완료된 작업의 개수를 추적
//변수에 대한 명명 내보내기 임
export let completedCount  = 0;


