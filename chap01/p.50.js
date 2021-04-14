// 프로미스

//프로미스는 js에서 비동기 프로그래밍에 사용하는 콜백 (callback),
//이벤트 (event) 이외에 선택할 수 있는 또 다른 기능

// ES6이전에는 bluebird가 Promises/A+ 스펙에 호환됨
// 여기선 ES6 언어 스펙에 정의된 프로미스임

// 콜백버전
function getProjects(callback) {
    // 서버 API를 호출하는 데 setTimeout을 활용
    setTimeout(() => {
        callback([{ id: 1, name: 'Project A'}, { id:2, name: 'Project B'}]);
    }, 100);
}
function getTasks(projects, callback) {
    // 서버 API를 호출하는 데 setTimeout을 활용
    setTimeout(() => {
        //구체적인 프로젝트의 작업 반환
        callback([{ id: 1, projectId: 1, title: 'Task A'},
            { id: 2, project: 2, title: 'Task B'}]);
    }, 100);
}
function render({ projects, tasks}) {
    console.log(`Render ${projects.length} projects and ${tasks.length} taks`);
}
// 비동기 호츌 구성하는데 콜백활용
getProjects((projects) => {
    getTasks(projects, (tasks) => {
        render({ projects, taks });
    });
});

