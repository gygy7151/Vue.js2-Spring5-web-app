// 1> User 생성자 함수
function User(name, interests, tasks){
    this.name = name;
    this.interests = interests;
    //1-1 이건 1-2처럼 함수밖에서 User 프로토타입에 greeting 프로퍼티를 생성가능하다.
    this.greeting = function() {
        console.log('Hi, I\'m ' + _name + '.');
    }
    // 6> 이후에 eat메소드를 User에 추가하고 -> 53번째코드로 넘어감
    // this.eat =  function() { //여기에 넣는거 아님.
    //     console.log(this.interests + "is my love:)")
    // }
}

// 1-2>
User.prototype.greeting = function () {
    console.log('Hi, I\'m ' + this.name + '.');
}

// 2> TeamMember 생성자 함수 생성 
function TeamMember (name, interests, tasks) {
    // this.name = name;
    // this.interest = interest;
    User.call(this, name, interests);
    this.tasks = tasks;
}



// 3> User라는 프로퍼티를 상속
TeamMember.prototype =  Object.create(User.prototype);
// 4> greeting 메소드를 재정의하기
// this.greeting = function() { //이건 TeamMember 함수내부에서 가능한것으로 예상됨.
//     console.log('Hi, I\'m ' + _name + '.');
// }
TeamMember.prototype.greeting =  function () {
    console.log('I\'m ' + this.name + '.Welcome to the team!');
};


// 5> 새로운 메소드인 work()를 추가한다
TeamMember.prototype.work = function() {
    console.log('I\'m working on ' + this.tasks.length + ' tasks');
}

var member = new TeamMember('Sunny', ['Traveling'], ['Buy three tickets', 'Book a hotel']);
member.greeting(); //I'm Sunny. Welcome to the team! 출력
member.work(); // I'm working on 2 tasks 출력

console.log(member instanceof TeamMember); //true출력
console.log(member instanceof User); //true출력
console.log(member instanceof Object); //true출력

// 6> 이후에 eat메소드를 User에 추가하고
User.prototype.eat = function () {
    console.log('What will I have for lunch?');
};
member.eat(); //what will I have for lunch? 출력


// 7> move()를 Object(최상위객체)에 추가한다.
// TeamMember.prototype.move = function() {
//     console.log(this.name + 'moved to new house');
// }
Object.prototype.move = function () {
    console.log('Every object can move now');
};
member.move(); //이제 모든 객체가 move를 호출할 수 있다
var alien = {};
alien.move(); //이제 모든 객체가 move를 호출할 수 있다
User.move(); //생성자 함수 객체도 호출 할 수 있다

console.log(member.__proto__ == TeamMember.prototype); //true출력
console.log(TeamMember.prototype.__proto__ == User.prototype); //ture출력
console.log(User.prototype.__proto__ == Object.prototype); //true출력

User.prototype.__proto__ == null;
member.move(); // Uncaught TypeError: member.move is not a function 출력
console.log(member instanceof Object); //false 출력(이런!)

TeamMember.prototype.isPrototypeOf(member); //true 출력

member.hasOwnProperty('name'); //true출력
member.hasOwnProperty('move'); /// false 출력










