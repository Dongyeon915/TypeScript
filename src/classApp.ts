interface Person {
   readonly name: string;
    age: number;

    eat(food: string):string;
}

let user1: Person;

user1 = {
    name: 'dong',
    age: 29,
    eat(food: string){
        return food;
    }
};

type AddFn = (a: number,b: number) => number;
let add: AddFn;

add = (n1: number,n2:number) => {
    return n1 + n2;
};

console.log(user1.eat('계란'))

class Dong implements Person {
    name: string;
    age = 30;
    skill: string;
    constructor(n: string,skill: string){
        this.name = n;
        this.skill = skill;
    }

    eat(food: string): string {
        return food
    }
}

let user2 = new Dong('dong','yoyo');
console.log(user2.age)

interface ICompanyInfo {
    name: string;
    // 물음표를 적어줌으로써 해당 변수가 없어도 오류발생x
    age?: number;
  }
  
  let obj: ICompanyInfo = {
    name: 'dong'
  };