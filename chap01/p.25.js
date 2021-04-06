function workout() {
    goToGym(); //출력 결과는 무엇일까? -> 변수선언을 했지만 대입은 하지 않았기에.. 아직실행되지 않은 상태임으로 아무것도 출력되지 않는다.
    var goToGym = function () {
        console.log('Workout in Gym A');
    }

    return;
    function goToGym() {
        console.log('Workout in Gym B');
    }
}
workout();
//Workout in Gym B

//위 코드를 자바스크립트 인터프리터가 처리할때는 다음과 같이 이해한다.
function workout() {
    function goToGym() {
        console.log('Workout in Gym B');
    }
    var goToGym;
    goToGym();
    goToGym = function () { //아무것도 대입되지 않은 상태임..
        console.log('Workout in Gym A');
    }
    return;
}
workout();

