import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";


let employee1 = new Employee('Nguyen','A',new Date('2020-10-5'),'hanoi','nhanvien');
let employee2 = new Employee('Nguyen','B',new Date('2020-10-7'),'hanoi2','nhanvien');
let employee3 = new Employee('Nguyen','C',new Date('2020-10-9'),'lk','nv');

let employeeManager = new EmployeeManager();
employeeManager.add(employee1);
employeeManager.add(employee2);
employeeManager.add(employee3);
employeeManager.deleteEmployee(1)
console.log(employeeManager.getInfo);
