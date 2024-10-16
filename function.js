function sayHello(name) {
    return "Hello ".concat(name); // 이런식으로도 변수를 쓸 수 있네..? 자바스크립트랑 똑같네
}
sayHello('Hana');
function sayHello2(name, greeting) {
    return "".concat(greeting, " ").concat(name);
}
console.log(sayHello2('Hana'));
sayHello2('Hana', 'Hello');
function sayHello3(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, " ").concat(name);
}
console.log(sayHello3('Hana'));
// 함수 내 함수 호출 방식 (구조가 특이하네)
function printName(firstName, formatter) {
    console.log(formatter(firstName));
}
function formatName(name) {
    return "".concat(name, " \uC528");
}
printName('Hana', formatName);
// 화살표 함수
var sayHello4 = function (name) { return "Hello ".concat(name); };
console.log(sayHello4('Hana'));
