//스코프와 클로저 자바예제
 function bookHotel(city) {
     var availableleHotel = 'None';
     for (var i = 0;  i < hotels.length; i++) {
         var hotel = hotels[i];
         if(hotel.city == city && hotel.hasRoom) {
             availableHotel = hotel.name;
             break;
         }
     }
     //여기서 i와 hotel은 여전히 접근 가능하다
     console.log('Checked ' + (i + 1) + ' record(s)'); // Checked 2 record(s) 출력
     console.log('Last checked ' + hotel.name); //Last checked Hotel B출력

     {
         function placeOrder() {
             var totalAmount = 200;
             console.log('Order placed to ' + availableHotel);
         }
     }

     placeOrder();
     //접근 불가
     //console.log(totaleAmount);
     return availableHotel;
 }
 // 접근 불가
 // console.log(availableHotel)
 
