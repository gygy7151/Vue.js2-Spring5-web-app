//함수매개변수 비구조화
//P.42에선 배열의 나머지요소를 다른배열에 넣는데 기존의 비구조화 할당의 '나머지요소' 구문을 활용했다.
//이번엔 매개변수에도 비구조화 할당을 적용해보자

//비구조화 구문으로 workout()함수의 첫번째 인자에 gym변수를 추출함
function workout({gym}, times) {
    console.log('Workout in ' + gym + ' for ' + times + ' times' );
}

//workout()함수의 인자중 gym 변수에 'Gym A'인자를 전달함 'Gym A'는 
let thisWeek = {gym: 'Gym A'};
workout(thisWeek, 2);       // Workout in Gym A for 2 times 출력
//만약 workout() 함수에 숫자나, 문자열, 배열, 함수를 전달하면 gym 변수의 값이 undefined가 된다

//비구조화에서 더 비구조화 하는 방법
//첫번째 인자의 매개변수 비구조화 수행
function workout({gym, todos}) {
    //todos 변수의 추가 비구조화
        //여기서 workout()함수에 전달되는 인자는 todos프로퍼티를 가져야하고 배열이어야 함
    let [first] = todos; //<-js는 undefined or null에 대해선 비구조화 수행못함

    console.log('Start ' + first + ' in ' + gym);
}
let today = {gym: 'Gym A', todos: ['Treadmill']};
workout(today);             // Start Treadmill in Gym A 출력
workout({gym: 'Gym B'})     // throw TypeError 출력 <-19번 조건이 아니면 다음과같이 에러 출력

//위 에러를 해결하려면 todos기본값을 설정해 문제개선가능

//todos변수에 기본값만 주고, workout 함수를 단일 매개변수로 호출하면 됌
function workout({gym, todos=['Treadmill']}) { //미리 todos 프로퍼티값은 workout()함수 파라미터(인자)에 전달해주면 해결됨
    let [first] = todos;
    console.log('Start ' + first + ' in ' + gym);
}
workout({gym: 'Gym A'}); //Start Treadmill in Gym A 출력
workout();               //throw TypeError 출력 
//만약 work({gym='',...}) 이렇게 gym변수에 기본값을 할당하면 해결됨? Noo!
//전체매개변수gym의 프로퍼티 값을 31번과 마찬가지로 미리 설정해주면 해결됨? Yes!!
//아래와 같이 전체매개변수 비구조화에 기본값을 할당하는법

function workout({gym='', todos=['Treadmill']} = {}) {
    ...
}






