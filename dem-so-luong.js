var Applicate = /** @class */ (function () {
    function Applicate(name) {
        this.name = name;
        Applicate.count++;
    }
    Applicate.count = 0;
    return Applicate;
}());
console.log(Applicate.count);
var ap1 = new Applicate('a1');
console.log(Applicate.count);
var ap2 = new Applicate('a2');
console.log(Applicate.count);
