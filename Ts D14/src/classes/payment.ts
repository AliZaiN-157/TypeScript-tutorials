// classes
// Private Public and ReadOnly Permissions

import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter{
    // readonly client: string; // You can only read it
    // private details: string; // You can't use it outside the class
    // public amount: number; // You can do anything you want.

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) {}
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}