// 객체 타입 기본
var obj = {
    name: 'Hana',
    age: 36
};
console.log(obj.name + ': ' + obj.age);
// 옵셔널 기능 (?)
function printName(obj2) {
    if (typeof obj2.lastName == 'undefined') {
        console.log(obj2.firstName);
    }
    else {
        console.log(obj2.firstName + ' ' + obj2.lastName);
    }
}
printName({ firstName: 'Hana' });
printName({ firstName: 'Hana', lastName: 'Tatsuya' });
