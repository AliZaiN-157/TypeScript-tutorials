// interfaces with classes

import { Invoice } from "./classes/Invoice.js";
import {Payment} from "./classes/payment.js";
import {HasFormatter} from './interfaces/HasFormatter'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('ryu','website',250)
// docTwo = new Invoice('mario','website design',150)

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// const invOne = new Invoice('mario','work on the mario website', 230);
// const invTwo = new Invoice('ryu','work on the abc website', 330);

// let invoices: Invoice[] = []
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv =>{
//     console.log(inv.client,inv.amount,inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else { 
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc)
})
