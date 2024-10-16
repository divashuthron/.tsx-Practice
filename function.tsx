function sayHello(name: string): string {
    return `Hello ${name}` // 이런식으로도 변수를 쓸 수 있네..? 자바스크립트랑 똑같네
}
sayHello('Hana')

function sayHello2(name: string, greeting?: string): string {
    return `${greeting} ${name}`
}

console.log(sayHello2('Hana'))
sayHello2('Hana', 'Hello')

function sayHello3(name: string, greeting: string = 'Hello'): string {
    return `${greeting} ${name}`
}

console.log(sayHello3('Hana'))

// 함수 내 함수 호출 방식 (구조가 특이하네)
function printName(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName))
}

function formatName(name: string): string {
    return `${name} 씨`
}

printName('Hana', formatName)

// 화살표 함수
let sayHello4 = (name: string): string => `Hello ${name}`

console.log(sayHello4('Hana'))