// classes

// Private Public and ReadOnly Permissions

class Invoice {
    // readonly client: string; // You can only read it
    // private details: string; // You can't use it outside the class
    // public amount: number; // You can do anything you want.

    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ) {
        
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

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
