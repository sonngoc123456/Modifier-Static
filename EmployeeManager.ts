import {Employee} from "./Employee";

export class EmployeeManager {
    lists = [];

    constructor() {
    }
    getInfo() {
        return this.lists;
    }
    add(employee) {
        this.lists.push(employee)
    }
    deleteEmployee(i:number) {
     this.lists.splice(i,1)
    }
}