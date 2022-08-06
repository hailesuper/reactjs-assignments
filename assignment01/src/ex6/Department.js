"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDepartment = exports.department1 = exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(Department.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Department;
}());
exports.Department = Department;
exports.department1 = new Department(1, "A");
function printDepartment(department) {
    console.log("Department ID = " + department.id +
        "\n Department Name = " + department.name);
}
exports.printDepartment = printDepartment;
