# TypeScript기본&기본 타입

상태: 완료
마감일: 2023년 8월 2일 → 2023년 8월 2일
프로젝트: TypeScript (../../TypeScript%201d6da4739b3d462ab4df462342d55114.md)

---

# Using Type

[📘 타입스크립트 타입 선언 & 종류 💯 총정리](https://inpa.tistory.com/entry/TS-📘-타입스크립트-타입-선언-종류-💯-총정리)

---

# 타입 작성

**타입스크립트의 주요 원시 타입은 모두 소문자입니다**

```jsx
function add(n1:number, n2:number){
	console.log(typeof number) //number 타입으로 출력
    return n1 + n2;
}

const number = 1;
const number2 = 2.1

const result = add(number,number2); //문자열을 넣게된다면 error가 난다.
console.log(result)
```

```jsx
function add(n1:number, n2:number, showResult: boolean, phrase: string){
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return result;
    }
}

// 타입을 적어주지 않아도 타입 추론을 통해 어떠한 타입인지 알고있다.
const number = 1;
const number2 = 2.1;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number,number2,printResult,resultPhrase);
console.log(result)
```

---

# 타입스크립트 컴파일

![Untitled](TypeScript%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB&%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%20f553dbeec89e465abd7586ec65de83ed/Untitled.png)

자바스크립트는 **동적 타이핑 언어**이기 때문에 **런타임 에러 (Runtime Error)**가 발생할 수 있습니다. 또한, 개발 단계에서 인지하지 못한 실수나 예상치 못한 경우가 발생할 수 있습니다. 이 경우, 사용자가 불편을 겪거나 프로그램이 멈출 수도 있습니다.

하지만 타입스크립트는 **정적 타이핑 언어**이기 때문에 **컴파일 과정에서 에러 (Compile Error)**가 발생합니다.

따라서 개발 단계에서 에러를 미리 인지하고 처리할 수 있어 개발자의 편의성을 높여줍니다.

---

# 타입 할당 및 타입 추론하기

### 명시적 (Explicit)

```jsx
const age: number = 29;
```

### 타입 추론

```jsx
초기 변수 할당시 타입을 지정해주면 잘못된 값 할당을 피할수있다.
let number: number; 
```

ex

```jsx
let resultPhrase = '초기 문자열 할당';
// 변수의 타입을 처음에 지정해주지 않으면, 값에 따라 타입이 결정되므로, resultPhrase에 0을 할당하는 것은 에러를 발생시킵니다.
resultPhrase = 0;
```

---

# 객체 형태

## JavaScript

```jsx
const person = {
		// ,표의 따른구분
    name: dong, 
    age: 20,
}
```

## TypeScript

```jsx
const person = {
 // ;구분 키와값이 아닌 타입이 들어간다 ( 값X )
    name: string; 
    age: number;
}
```

```tsx
// type alias
// 클래스 사용시 메소드 유무에 따라 사용한다.
type IUser = {
    name: string,
    age: number
}
 
let userA: IUser = {
    name: '동연',
    age: 29
};
 
let userB: IUser = {
    name: 'inpa',
    age: false, // Error
    email: 'inpa@naver.com' // Error
};
```

```tsx
// interface
interface IUser {
  name: string,
  age: number
}

let userA: IUser = {
  name: '동연',
  age: 29
};

let userB: IUser = {
  name: 'inpa',
  age: false, // Error
  email: 'inpa@naver.com' // Error
};
```

# 중첩 객체

```tsx

// 다음과 같은 자바스크립트 객체가 있다고 가정해 봅시다:

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

// 이러한 객체의 타입은 아래와 같습니다.

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```

---

# 배열

## 배열 선언 방법

```tsx
let fruits:string[] = ['Apple','Banana']; // []

let fruits:Array<string> = ['Apple','Banana']; // <string>
```

## 예제

```tsx
const person = {
    name : 'Maximilian',
    age : 30,
    hobbies: ['Sports','Cooking']
};

let favoritActivities: string[];
 // error 배열을 타입으로 선언했기에 ['Sports']
favoritActivities = 'Sports';
// 숫자도 넣고싶다면 any any를 사용할거면 타입스크립트 사용 이유가없다
let favoritActivities: any[];
favoritActivities = ['Sports',1];
```

---

# 튜플 : Tuple

배열과 유사하며 정해진 타입의 고정된 길이 배열을 표현

```tsx
let tuple: [string,number];
tuple = ['a',1];
tuple = [1, 'a']; // 타입 불일치 오류 발생
```

```tsx
let userName: string;
userName = '동연';

let userAge: number = 29;

let userA: [number,string] = [userAge,userName];

console.log(userA);
console.log(userA[0]);
console.log(userA[1]);
```

## ReadOnly

```tsx
 // 수정이 불가능하다
let read: readonly [string,number] = ['rest',123];
// const 사용시 초기값을 넣어야 하므로 상황에 따라 다르다.
```

---

# 열거형 Enum

Enum은 숫자 혹은 문자열 값 집합에 이름(Member)을 부여할 수 있는 타입으로, 값의 종류가 일정한 범위로 정해져 있는 경우 사용된다.

기본적으로 **0부터 시작하며 1씩 증가**한다.

```tsx
enum Week {
    Sun,
    Mon,
    Tue,
    wed,
    Thu,
    Fri = 33, // 수동 값 변경
    Sat
}

console.log(Week.Mon); // 1
console.log(Week.Sat); // 34
```

---

# 리터럴 타입

TypeScript의 리터럴 타입은 string, number 두 가지가 있다. 이를 사용하면 문자열이나 숫자에 정확한 값을 지정할 수 있다.

```tsx
// 나만의 타입사용이거나 사용자에게 해당 타입을 강요할때
type Food = "rice" | "noodle" | "meat";

const myFood1: Food = "rice";
const myFood2: Food = "aaa";  // Error: Type 'aaa' is not assignable to type 'Food'.
```

## 숫자형 리터럴 타입

```tsx
type Grade = 1 | 2 | 3;

const student1: Grade = 1;
const student2: Grade = 5; // 에러
```

---

## ex

```tsx
// AddFn이라는 함수 타입을 정의합니다. 이 타입은 두 개의 숫자를 입력받아 숫자를 반환하는 함수를 나타냅니다.
type AddFn = (a: number, b: number) => number;

// AddFn 타입을 갖는 add 변수를 선언합니다.
let add: AddFn;

// add 변수에 두 숫자를 더하여 결과를 반환하는 함수를 할당합니다.
add = (n1: number, n2: number) => {
    return n1 + n2;
};
```

# 함수

화살표 함수를 이용해 타입을 지정할 수 있다. (인수의 타입과 반환 값의 타입을 입력한다.)

```tsx
let myFunc: (arg1: number, arg2: number) => number;
myFunc = function(x, y) {
  return x + y;
}
myFunc(1, 2) // 3

let noneFunc: () => void;
noneFunc = function () {
  console.log('hihi');
};
```

---

# 유니언

2개 이상의 타입을 허용하는 경우 | 를 이용해 타입을 구분한다.

```tsx
let union: (string | number);
union = 'Hello World';
union = 777;
```

---

# Never

어떤한 타입도 적용할수없다.

```tsx
function error(message: string): never {
  throw new Error(message);
}
```