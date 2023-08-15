class Department {
//    name: string;
//    id: string;
    private employees: string[] = [];

    constructor(public name: string,private id: string) {
//        this.name = name;
//        this.id = id;
    }

    describe(this: Department) {
        console.log(`Deparment + ${this.name}: ${this.id}`);
    }
//  배열 추가 메소드
    addEmployees(employees: string) {
        this.employees.push(employees);
    }
//  출력 메소드
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static consoleMe(text: string) {
        console.log(text);
    }
}

class ITDepartment extends Department {
    addmins: string[];
    constructor(id:string,public admins: string[]){
        super(id,'IT') // superClass 생성자 호출 항상 첫번째로 호출
        this.addmins = admins;
    }
}

Department.consoleMe("static나오니");

class AccountingDepartment extends Department {
    private static instance: AccountingDepartment;

    constructor(private lastReport: string,private reports: string[]){
        super('ehddus','1');
    }

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('리포트 없어 돌아가');
    }


    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }


    set mostRecentReport(value: string){
        if (!value){
            throw new Error("벨류없다")
        }
        this.addReport(value);
    }

    static getInstance() {
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2',[]);
        return this.instance;
    }

}

const accountingDepart = new AccountingDepartment("",[]);
accountingDepart.mostRecentReport = "",
console.log(accountingDepart.mostRecentReport);

accountingDepart.mostRecentReport = "펔";
console.log()

const accounting = new ITDepartment('Accounting',['dong']);

accounting.addEmployees('Max');
accounting.addEmployees('manu')

accounting.printEmployeeInformation();

accounting.describe();
