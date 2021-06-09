// classes
// Private Public and ReadOnly Permissions
export class Invoice {
    // readonly client: string; // You can only read it
    // private details: string; // You can't use it outside the class
    // public amount: number; // You can do anything you want.
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
