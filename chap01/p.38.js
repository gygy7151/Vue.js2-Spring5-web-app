// 매개변수 기본값
// ES6에서 함수 매개변수의 기본값을 정의 가능
// ES5에서 동일구현이 코드 가독성 떨어뜨림

// ES6
const shoppingCart = [];
function addToCart(item, size = 1) {
    shoppingCart.push({ item: item, count: size});
}

addToCart('Apple');             //size는 1
addToCart('Orange', 2)          //size는 2


// ES5
function addToCart(item, size) {
    size = (typeof size != 'undefined') ? size : 1;
    shoppingCart.push({ item: item, count: size})
}