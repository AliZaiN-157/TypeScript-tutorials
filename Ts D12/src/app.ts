// interfaces

interface IsPerson {
    name: string, 
    age: number; 
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'ali',
    age: 20,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spent',amount);
        return amount;
    }
}

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice('mario','work on the mario website', 230);
const invTwo = new Invoice('ryu','work on the abc website', 330);

let invoices: Invoice[] = []
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv =>{
    console.log(inv.client,inv.amount,inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})
