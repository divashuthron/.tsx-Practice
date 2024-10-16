/**
 * 타입 어서션
 * 
 * 타입 추론으로 변수의 세부 타입을 알 수 없는 경우, 이를 명시하여 세부 타입에 접근 가능
 */

let myCanvas = document.getElementById('main_canvas') // canvas 타입의 HTML 요소 가져오기
// HTMLElement를 타입 추론으로 알아냈으나, 이 요소가 HTMLCanvasElement 인지 HTMLDivElement 인지 알 수 없음
// console.log(myCanvas.width) // 오류 발생, HTMLDivElement의 속성에 접근하려 시도했으므로

myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement // 타입 어서션 사용

// 주로 any와 함께 사용함
const response = 'Hana'
const result = (response as any) as string

// 컴파일 상에서 오류가 발생하지 않아 오류 검출이 어려울 수 있음
const foo: any = 'test'
const bar: number = foo as number // string > any > number 과정을 거치므로 컴파일 상 문제는 없으나 실행 시 parseException 발생

console.log(bar.toFixed(2)) // 실행 시 parseException 발생