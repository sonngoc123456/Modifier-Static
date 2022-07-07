class Intructor {
    name:string;
    role : string
    constructor(name : string, role :string = "assistant") {
        this.name = name;
        this.role = role;
    }
    renderDetail() {
        console.log(`${this.name} - ${this.role}`)
    }
    static helloworld() {
        console.log('hello mylove');
    }
    static canTeach(intructor) {
       return (intructor.role === 'classroom')
    }
}
let juniorIntructor = new Intructor('Piter');
let seniorIntructor = new Intructor('Harry','classroom');
juniorIntructor.renderDetail();
seniorIntructor.renderDetail();

Intructor.helloworld();
console.log(`${seniorIntructor.name} can teach: ${Intructor.canTeach(seniorIntructor)}`);
console.log(`${juniorIntructor.name} can teach: ${Intructor.canTeach(juniorIntructor)}`);