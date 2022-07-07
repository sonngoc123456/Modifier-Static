export class Employee {
    firstname : string;
    lastname : string;
    birthday: Date;
    address : string;
    position : string;
    constructor(firstname: string, lastname: string, birthday: Date, address: string, position: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.address = address;
        this.position = position;
    }
}