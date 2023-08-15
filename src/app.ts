// // type Admin = {
// //     name: string;
// //     privileges: string[];
// // };

// // type Employee = {
// //     name: string;
// //     startDate: Date;
// // };

// // type ElevatedEmpluoyee = Admin & Employee;

// // const e1: ElevatedEmpluoyee = {
// //     name: 'dong',
// //     privileges: ['create-server'],
// //     startDate: new Date()
// // };

// // type Combinable = string | number;
// // type Numeric = number | boolean;

// // type Universal = Combinable & Numeric;

// const addnum = (a: number, b: number): number
// const addNum = (a:Combinable,b: Combinable) => {
//     if(typeof a === 'string' || typeof b === 'string'){
//         return a.toString() + b.toString();
//     }
//     return a+b;
// }

// // function printEmployeeInformation(emp: UnkownEmployee){
// //     console.log('Name: ' + emp.name);
// //     if('privileges' in emp){
// //         console.log('privileges: ' + emp.privileges);
// //     }
// //     if('satartDate' in emp){
// //         console.log('Start Date: ' + emp.startDate);
// //     }
// // }

// // class Gun {
// //     shoot() {
// //         console.log('얼굴에 한방');
// //     }
// // }

// // class Knife {
// //     kill() {
// //         console.log('찌르기')
// //     }
// // }

// // type Killer = Gun | Knife;

// // const killer1 = new Gun();
// // const killer2 = new Knife();

// // function useWeapones(weapone: Killer) {
// //     if('shoot' in weapone){
// //         weapone.shoot();
// //     }
// //     if('kill' in weapone){
// //         weapone.kill();
// //     }
// // }


// interface Dog {
//     type: 'dog';
//     runningSpeed: number;
// }

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// type Animal = Dog | Bird;

// const moveAnimal = (animal : Animal) => {
//     let speed;
//     switch(animal.type) {
//         case 'bird':
//         speed = animal.flyingSpeed;
//         break;
//         case 'dog':
//         speed = animal.runningSpeed;
//     }
//     console.log(speed);
// }

// moveAnimal({type:'bird',flyingSpeed: 10});

// const inputElement = document.getElementById("m")

// function totalSalary(salary: {[key: string]:number}){
//     let total = 0;
//     for (const key in salary) {
//         total += salary[key];
//     }
//     return total;
// }

// const students = {
//     mark: {
//         age: 20,
//     	score: {
//             korean: 90,
//             english: 80,
//             math: 40
//         }
//     },
//     john: {
//         age: 20,
//     }
// }

// console.log(students.john?.score?.english);

// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const pro




// number 타입의 매개변수를 return하는 함수
function NumberReturnFunc(arg: number): number {
    return arg;
  }
  
  // string 타입의 매개변수를 return하는 함수
  function StringReturnFunc(arg: string): string {
    return arg;
  }
  
  // boolean 타입의 매개변수를 return하는 함수
  function BooleanReturnFunc(arg: boolean): boolean {
    return arg;
  }

//  함수의 기능은 똑같은데, 매개변수의 타입과 반환하는 타입이 다르다는 이유로 여러 개의 함수를 구현하였습니다.
//  제네릭 기법을 사용하여 한 개의 함수로 구현할 수 있습니다
function GenericReturnFunc<T>(arg: T): T {
    return arg;
  }


class MyClass {
    // <> 안에는 인수의 타입을 작성합니다.
    static numberReturnFunc<T,>(arg: T): T {
        return arg;
    }
}

let number1 = MyClass.numberReturnFunc(231);
console.log(number1)

