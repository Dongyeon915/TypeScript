# 차세대 JS와TypeScript

상태: 완료
마감일: 2023년 8월 4일 → 2023년 8월 4일
프로젝트: TypeScript (../../TypeScript%201d6da4739b3d462ab4df462342d55114.md)

## 

---

# 화살표 함수

```tsx
const addNum = (a : number,b:number) => {
    return a + b;
}

const printOut = (output: string | number) => console.log(output);

printOut(addNum(5,2));
```

# 파라미터 초기값 설정

```tsx
// a의 값만을 넣어서 함수 실행 타입스크립트는 number타입으로 자동 추론한다.
// const addNum = (a : number = 1, b:number) => { 

// 디폴트 값은 항상 뒤에 와야한다.
// const addNum = (a : number = 1, b:number) => { error 
const addNum = (a : number, b:number = 1 ) => { 
    return a + b;
}

addNum(1) // a의 값만을 설정
```

---

# 스프레드 연산

```tsx
const hobbies = ['Sports','Cooking];
const newHobbies = ['Hiking'];
 //내용 복사
newHobbies.push(...hobbies);

const person = {
	name: '동연',
	age: 12
};
// 객체 복사
const newDong = {...person}; 
```

# 배열의 나머지 복사 (any 타입)

자바스크립트의 reduce함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환 합니다.

### 파라미터

1. callback function
    - 다음 4가지의 인수를 가집니다.
        1. **accumulator** accumulator는 callback함수의 반환값을 누적합니다.
        2. **currentValue** 배열의 현재 요소
        3. **index**(Optional) - 배열의 현재 요소의 인덱스
        4. **array**(Optional) - 호출한 배열

```tsx
const addArray = (...numbers : number[]) => {
    let result = 0;
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    },0);
}

const addNumber = addArray(3,4,5,6,);
```

---

# 배열 및 객체 비구조화 할당

```tsx

 // 복사할배열[1],[2]는 지정한 hobby로 나머지는 전부 나머지로 들어간다
const [hobby1,hobby2, ...namug] = '복사할 배열'
const 는 상수로 저장 let도 가능
```

- [ ]  **예제 만들어보기!**

```jsx
const info = ['블랙핑크', 3, true];
// 배열은 key가 없어서 배열의길이만 맞으면 값 할당가능
const [singer, member, schedule] = info;
console.log(singer)
console.log(member)
console.log(schedule)

// 기존 JS 넣을때
const singer01 = info[0];
const member01 = info[1];
const schedule01 = info[2];
console.log(singer01)
console.log(member01)
console.log(schedule01)

// 객체는 key가 있으므로 key값으로 넣어줘야하며 사전에 key가 다를시 error를 발생
// 구조화
const blackPink = { singer03: '블랙핑크', member03: 3, shedule03: true};
// 비구조화
const {singer03, member03, shedule03} = blackPink;
```

# 객체를 해당 key값을 저장 (자바스크립트)

```tsx
// person 객체속 name,age만들 저장한다
const {name, age} = person 
// 해당값을 userName에 저장 기존 객체는 영향x
const {name: userName,age} = person 
```