//User 클래스 생성
class User {
    constructor(name, interests) {
        this.name =  name;
        this.interests = interests;
    }
    // User.prototype.greeting과 같다
    greeting() {
        console.log('Hi, I\'m ' + this.name + '.')
    }
}

let user = new User('Suuny', ['Traveling', 'Swimming']);
user.greeting(); //Hi, I'm Sunny출력