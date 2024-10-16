// 배열 기본
const array: string[] = []
array.push('ab')

// 멀티 타입 배열
// UNION 타입
const mixedArrayUnion: (string|number)[] = ['ab', 1]
// 튜플 타입
const mixedArrayTuple: [string, number] = ['ab', 1]