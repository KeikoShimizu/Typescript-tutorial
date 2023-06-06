"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
Object.defineProperty(exports, "__esModule", { value: true });
//Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " is owns $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on mario website', 250);
var invTwo = new Invoice('mako', 'work on mako website', 440);
//すでに決まったclassをarrayに入れるのであれば、classnameを指定して入れられる　class Invoice をinvoices arranに入れる
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//inv.detailはprovateなのでここでは直に使えない。ただfunmat() funtionですでに含まれている
invoices.map(function (inv) {
    // console.log(inv.client, inv.details, inv.amount, inv.format());
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form');
// console.log(form.children);
//input
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
