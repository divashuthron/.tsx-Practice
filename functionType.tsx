function genBirdsInfo(name: string): string[] {
    return name.split(',')
}

function singBirds(birdInfo: (x: string) => string[]): string {
    return birdInfo('오리, 비둘기')[0] + ' 꽥꽥'
}

console.log(singBirds(genBirdsInfo))

/**
 * 처리 순서
 * 
 * 1. singBirds 진입, 함수 인자는 genBirdsInfo
 * 2. genBirdsInfo에 인자로 '오리, 비둘기' 입력 후 함수 진입
 * 3. name.split을 만나 0 포인터에 오리, 1 포인터에 비둘기 들어감
 * 4. 함수에서 벗어나, [0] 포인터를 찾고 있으므로 오리 반환
 * 5. 최종적으로 오리 + 꽥꽥이 됨
 */