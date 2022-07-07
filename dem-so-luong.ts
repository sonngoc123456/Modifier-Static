class Applicate {
    private name:string;
    static count : number = 0;
    constructor(name: string) {
        this.name = name;
        Applicate.count++
    }
}

console.log(Applicate.count);
let ap1 = new Applicate('a1');
console.log(Applicate.count);
let ap2 = new Applicate('a2');
console.log(Applicate.count);