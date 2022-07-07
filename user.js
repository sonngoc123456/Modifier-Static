var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    Object.defineProperty(User.prototype, "getInfo", {
        get: function () {
            return ("Ten: ".concat(this.name, " va email: ").concat(this.email));
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.isAmin = function () {
        if (this.role === 1) {
            console.log('Admin');
        }
        else if (this.role === 2) {
            console.log('Users');
        }
    };
    return User;
}());
var user = new User('son', 'son@vn', 1);
console.log(user.getInfo);
user.isAmin();
