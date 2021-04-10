// 프로미스를 활용한 버전
function getProjects() {
    return new Promieses((resolve, reject) => {
        setTimeout(() => {
            resolve([{ id: 1, name: 'Project A'}, { id: 2, name: 'Project B'}]);
        }, 100);
    })
}

function getTasks(projects) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ projects,
                      tasks: ['Buy three tickets', 'Book a hotel'] });
        }, 100);
    });
}

function render({ projects, tasks}) {
    console.log(`Render ${projects.length} projects and ${task.length} tasks`);
}
getProjects()
    .then(getTasks)
    .then(render)
    .catch((error) => {
        console.log('Handling error', error);
    });
    