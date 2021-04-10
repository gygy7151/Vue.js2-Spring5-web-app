//나머지 요소
//비구조화 할당에서 배열의 나머지 요소를 나머지 다른 배열 넣는데 나머지 요소(rest elements)와
//동일한 구문을 사용할 수 있음

//shallow clone(얇은 복제)
//배열의 두,세번째요소를 others 변수로 복사
let [first, ...others] = ['Traveling', 'Swimming','Shopping'];
console.log(others); // ["Swimming", "Shopping"] 출력

//만약 배열의 요소가 객체일 때, 복사된 배열에 프로퍼티를 변경시 원본배열에서도 변경된다
//두 배열의 요소가 동일한 객체를 참조하고 있기 때문

const fruits = [{name:'Apple', price:100},{name:'Orange', price:80}];
//fruits배열을 myFruits 배열로 복사함
let [...myFruits] = fruits;

console.log(myFruits[0].name);          // Apple 출력 
//기존 배열 프로퍼티에 신규객체 추가
myFruits.push({name:'Banana', price:90});    
console.log(myFruits.length);           // 3출력 -> 복사배열에 영향
console.log(fruits.length);             // 2출력 -> 원본배열 fruits엔 아무영향 안줌
//기존 배열 첫번째 프로퍼티 값 뼌경
myFruits[0].price = 110;
console.log(fruits[0].price);           // 110출력 ->원본배열 fruits에도 값이 변경됨

 

