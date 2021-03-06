"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario websirte', 230);
var invTwo = new Invoice('ryu', 'work on the abc websirte', 330);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs 
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
