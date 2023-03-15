"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addNumbers = function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    };
    Calculator.prototype.substractNumbers = function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    };
    Calculator.prototype.multiplyNumbers = function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    };
    Calculator.prototype.divideNumbers = function (firstNumber, secondNumber) {
        if (secondNumber !== 0) {
            return firstNumber / secondNumber;
        }
        else {
            return 'You can not divide with 0... Try to type another one.';
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
