enum Role {
    Admin = 1,
    Users
}
class User {
    protected name : string;
    protected email : string;
    role : Role ;

    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setRole(role) {
        this.role = role;
    }
    isAmin() {
        if(this.role===1) {
            return 'Admin';
        }else {
            return 'Users';
        }
    }
    getInfo() {
        return `Ten: ${this.name} va email: ${this.email} la ${this.isAmin()}`;
    }
}
let user1 = new User('son','son@vn',Role.Users);
console.log(user1.getInfo());