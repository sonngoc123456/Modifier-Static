class User {
    protected name : string;
    protected email : string;
    role : number ;

    constructor(name: string, email: string, role: number) {
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
    getInfo() {
        return `Ten: ${this.name} va email: ${this.email}`;
    }
    isAmin() {
        if(this.role===1) {
            console.log('Admin');
        }else if(this.role===2) {
            console.log('user');
        }
    }
}
let user = new User('son','son@vn',1);
console.log(user.getInfo());
user.isAmin();