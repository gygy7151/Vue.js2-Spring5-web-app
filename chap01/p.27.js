// 블록 스코프, let, const

//workout이라는 생성자함수 생성
function workout() {
    let gym = 'Gym A';

    const gymStatuses = { 'Gym A': 'open', 'Gym B': 'open', 'Gym C': 'closed'};
    for (let gym in gymStatuses) {
        console.log(gym+ ' is ' + gymStatuses[gym]);
    }

    // 새로운 스코프 생성
    {
        const gym = 'Gym B'; //여기 스코프에서만  여기gym샹수에 접근가능하다. ->그래서 값이 Gym B 상수가 리턴되는것이다.
        console.log('Workout in ' + gym);
        // 다음은 throw TypeError를 던질 것이다.
        // gym = 'Gym C';
    }

    console.log('Workout in ' + gym); // 이건 5번라인 gym변수로 돌아간다.

    // gym 함수도 이 블록에서만 접근가능
    {
        function gym() {
            console.log('Workout in a separate gym');
        }
        gym();
    }

    // if블록 생성 
    if (gymStatuses[gym] == 'open') {
        let exercises = ['Treadmill', 'Pushup', 'Spinning'];
    }

    if (gymStatuses[gym] == 'open') {
        let exercises = ['Threadmill', 'Pushup', 'Spinning'];
    }

    // 여기서는 exercises에 접근할 수 없다.
    // console.log(exercises);

    try {
        let gym = 'Gym C';
        console.log('Workout in ' + gym);
        throw new Error('Gym is closed');
    } catch (err) {
        console.log(err);
        let gym = 'Gym D';
        console.log('Workout in ' + gym);
    }
}

workout();

