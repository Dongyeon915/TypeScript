# TypeScript컴파일러(및 구성)

상태: 완료
마감일: 2023년 8월 3일 → 2023년 8월 3일
프로젝트: TypeScript (../../TypeScript%201d6da4739b3d462ab4df462342d55114.md)

---

# 컴파일 모드 사용

코드의 변화를 자동으로 확인 후 브라우저 랜더

```tsx
tsc 이름.ts -w
```

## 두가지 이상의 .ts파일

```tsx
// 해당 명령어 이후 tsconfig.json파일이 생성된다
tsc --init
//  파일을 지정하지않고 사용가능
tsc --watch
```

---

# 파일 포함 및 제외하기

tsconfig.json 파일 내용 추가

```tsx
"exclude": [
	"제외파일.ts",
// * 모든 dev.ts
	"*dev.ts"
//  모든 폴더에서 
	"**/*.dev.ts" 
// 라이브러리를 가져오지 않기위해 사용된다. (기본적으로 제공된다.)
	"node_modules" 
]
```

설정 파일만을 컴파일 할때

```tsx
"include" : [
	"실행파일.ts"
]
```

---

# 타입스크립트 target 설정

```tsx
// 이전버전으로 설정시 lst변수를 var로 js파일을 생성한다.
"target": "ES6",
```

---

# 소스맵

```tsx
// 설정을 활성화 해주면 브라우저상 source에 ts 파일이 생성되며 디버깅 도가능하다
"sourceMap": true,
```

---

# rootDir,outDir

rootDir : 시작하는 루트 폴더

outDir : 컴파일 후 생성되는 js파일이 생성될 폴더명

[TypeScript 컴파일러 설정파일](https://dog-developers.tistory.com/189)

## index.html수정

```tsx
// 설정경로 수정
<script src="dist/app.js" defer></script>
<script src="dist/analytics.js" defer></script>
```

자동으로 분리해준다

![20230803_171604.png](TypeScript%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A5(%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%80%E1%85%AE%E1%84%89%E1%85%A5%E1%86%BC)%204d88910750724123b21f2e07bb054e18/20230803_171604.png)

---

# 컴파일 오류시 js파일 생성X

```tsx
//활성화시 ts파일 컴파일중 문제가있다면 js파일을 생성하지않는다St.
"noEmitOnError": true,
```

---

# Strict 컴파일 (더엄격하게 타입을검사)

tsconfig.json에서 strick 옵션은 default가 false이며 true로 변경시 아래의 옵션들도 같이 true가 된다.

```tsx
{
  "strict": true,
  "strictNullChecks": true,
  "strictFunctionTypes": true,
  "strictBindCallApply": true,
  "strictPropertyInitialization": true,
  "noImplicitThis": true,
  "alwaysStrict": true,
}
```

[[TypeScript] tsconfig.json 의 엄격한 타입 체킹 옵션 (Strict Type-Checking Options)](https://velog.io/@hailieejkim/TypeScript-tsconfig.json-의-엄격한-타입-체킹-옵션-Strict-Type-Checking-Options)