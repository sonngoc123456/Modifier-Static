var Intructor = /** @class */ (function () {
    function Intructor(name, role) {
        if (role === void 0) { role = "assistant"; }
        this.name = name;
        this.role = role;
    }
    Intructor.prototype.renderDetail = function () {
        console.log("".concat(this.name, " - ").concat(this.role));
    };
    Intructor.helloworld = function () {
        console.log('hello mylove');
    };
    Intructor.canTeach = function (intructor) {
        return (intructor.role === 'classroom');
    };
    return Intructor;
}());
var juniorIntructor = new Intructor('Piter');
var seniorIntructor = new Intructor('Harry', 'classroom');
juniorIntructor.renderDetail();
seniorIntructor.renderDetail();
Intructor.helloworld();
// console.log(
//     `${seniorIntructor.name} can teach: ${Intructor.canTeach(seniorIntructor)}`
// );
console.log("".concat(juniorIntructor.name, " can teach: ").concat(Intructor.canTeach(juniorIntructor)));
