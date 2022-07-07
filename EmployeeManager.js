"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.lists = [];
    }
    Object.defineProperty(EmployeeManager.prototype, "getInfo", {
        get: function () {
            return this.lists;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeManager.prototype, "add", {
        set: function (employee) {
            this.lists.push(employee);
        },
        enumerable: false,
        configurable: true
    });
    EmployeeManager.prototype.deleteEmployee = function (i) {
        this.lists.splice(i, 1);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
