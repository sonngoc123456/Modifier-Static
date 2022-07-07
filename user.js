var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
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
    User.prototype.isAmin = function () {
        if (this.role === 1) {
            return 'Admin';
        }
        else {
            return 'user';
        }
    };
    User.prototype.getInfo = function () {
        return "Ten: ".concat(this.name, " va email: ").concat(this.email, " la ").concat(this.isAmin());
    };
    return User;
}());
var user1 = new User('son', 'son@vn', 3);
console.log(user1.getInfo());
