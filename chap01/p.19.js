//스코프와 클로저 자바스크립트 예제
function bookHotel(city) { // 함수 스코프(Function Scope)
    var availableHotel = 'None';
    for(var i =0; i < hotels.length; i++) { 
        var hotel = hotels[i]; //hotels[0] = { name: 'Hotel A', hasRoom: false, city: 'Sanya'}, hotels[1] = { name: 'Hotel B', hasRoom: true, city: 'Sanya'}
        if(hotel.city == city && hotel.hasRoom) { // i = 0 일때 'hotels[0]번째 city명이 'Sanya가 아니면(false)'라는 조건문이 참이면 hotels[0]번째 city명을 출력한다. result: false  -> Hotel A는 출력되지 않는다.
            availableHotel = hotel.name;          //  i = 1 일때'hotels[1]번째 city명이 'Sanya'이면(true)'라는 조건문이 참이면 hotels[1]번째 city명을 출력한다. result: true -> Hotel B만 출력된다.
            break;
        }  
    }
    //여기서 i와 hotel은 여전히 접근 가능하다
    console.log('Checked ' + (i + 1) + ' record(s)'); // Checked 2 record(s) 출력 ?-> i= 1이기 때문.
    console.log('Last checked ' + hotel.name); //Last checked Hotel B 출력
    {
        function placeOrder() { // 클로저 함수:중첩된 함수
            var totalAmount = 200;
            console.log('Order placed to ' + availableHotel);
        }
    }
    placeOrder();
    //접근불가
    //console.log(totalAmount);
    return availableHotel;

}

var hotels = [{ name: 'Hotel A', hasRoom: false, city: 'Sanya'},  //전역스코프(global Scope)
{ name: 'Hotel B', hasRoom: true, city: 'Sanya'}];
console.log(bookHotel('Sanya')); //Hotel B 출력
//접근 불가
//console.log(availableHotel) //이건 로컬변수(local Variable)