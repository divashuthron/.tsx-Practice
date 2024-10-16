// 1. 타입 추론
// 명시적인 변수 초기화 수행 시 타입이 저동적으로 결정되는 기능이 있음
var age = 10; // number로 자동 결정
var user = {
    name: 'Hana', // string으로 자동 결정
    age: 36 // number로 자동 결정
};
console.log(typeof age); // number
console.log(typeof user.name); // string
console.log(typeof user.age); // number
// 2. 함수 반환 또한 추론 가능
function getUser() {
    return {
        name: 'Hana',
        age: 36
    };
}
console.log(typeof getUser().name); // string
// 3. 배열 값 또한 추론 가능
var names = ['Hana', 'Wonjoon', 'Eunjeong'];
names.forEach(function (name) {
    console.log(name.toUpperCase()); // 대문자 변환 함수 사용 가능 (string 내장함수)
    console.log(typeof name); // string
});
// 4. 타입이 결정되어있는 변수에 대입할 값의 타입이 일치하지 않으면 오류 발생
window.confirm = function () {
    // return 'Hana' // 오류 발생
    return true; // 통과
};
