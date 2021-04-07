// 클래스
class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    
    //greeting 메소드
    greeting() {
        console.log('Hi, I\'m ' + this.name + '.');
    }
    
    // interestsCount 게터
    get interestsCount() {
        return this.interests ? this.interests.length : 0;
    }
}

//User 클래스를 확장한 TeamMember 클래스를 생성
class TeamMember extends User {
    constructor(name, interests) { 
        
        // 생성자에서 name과 interests 프로퍼티를 초기화 하기 위해 super로 User의 생성자를 호출
        super(name, interests); 
        
        //_tasks와 _welcomeText 두개의 추가 프로퍼티를 정의
        // '_' 위 밑줄은 두개가 private 프로퍼티로 간주되어 외부에서 직접 변경될 수 없음을 암시
        // 주의> js에는 private 이 없다. 예를들어 member._tasks로도 이 프로퍼티에 접근가능
        this._tasks = [];
        this._welcomeText = 'Welcome to the team!';
    }
    
    // User의 greeting() 메소드를 재정의
    greeting() {
        console.log('I\'m ' + this.name + '. ' + this._welcomeText);
    }

    //work() 메소드 추가
    work() {
        console.log('I\'m working on ' + this._tasks.length + ' tasks.')
    }

    // TeamMember의 정적 메소드 maxTasksCapacity()d에 접근하는 tasks 세터를 정의

    set tasks(tasks) {
        let acceptedTasks = [];
        if (tasks.length > TeamMember.maxTasksCapacity()) {
            acceptedTasks = tasks.slice(0, TeamMember.maxTasksCapacity());
            console.log('It\'s over max capacity. Can only take two.');
        } else {
            acceptedTasks = tasks;
        }
        this._tasks = this._tasks.concat(acceptedTasks);
    }

    static maxTasksCapacity() {
        return 2;
    }
}

//member객체는 TeamMember의 모든 기능이 있음
let member = new TeamMember('Sunny', ['Traveling']);
member.greeting();  // I'm Sunny. Welcome to the team! 출력
member.tasks = ['Buy three tickets', 'Book a hotel', 'Rent a car'];
//It's over max capacity. Can only take two. 출력
member.work();  // I'm working on 2 tasks. 출력
console.log(member.interestsCount); // 1출력

//set을 정의하지 않아 동작하지 않음
member.interestsCount = 2; // 변경 사항은 저장되지 않음
console.log(member.interests(Count)); //1출력
// 만약 정의했다면 set interestsCount(interests) {..} 이런식


//get을 정의하지 않았기 때문에 미작동
console.log(member.tasks); //undefined 출력
// 만약 정의했다면 get tasks(tasks) {..} 이런식

//추가로 21번라인에서 정의한 TeamMember의 생성자에 접근하는데 member.constructor를 사용할 수 없다
//이유는 member.constructor는 member객체의 생성자 함수에 접근한다.

//User클래스에 새로운 메소드인 eat()를 추가하는 방법
//User prototype 객체에 추가해줘야됨
User.prototype.eat = function () {
    console.log('What will I have for lunch?');
};
member.eat(); // What will I have for lunch? 출력

//아래와같이 직접추가하려고 하면 TypeError가 난다
User.sleep = function () {
    console.log('Go to sleep');
};
member.sleep(); // Uncaught TypeError: member.sleep is not a function
//이유는 User생성자 함수 자체에 프로퍼티 sleep을 추가했기 때문임.
//sleep은 User클래스의 정적메소드가 됨
User.sleep(); // Go to sleep 출력

//class구문사용할때 메소드를 정의하면 자바스크립트 내부 동장은 프로토타입객체에 이 메소드를 추가한다.
console.log(User.prototype.hasOWnProperty('eat')); //true 출력
console.log(User.hasOwnProperty('eat'));  //true




 
