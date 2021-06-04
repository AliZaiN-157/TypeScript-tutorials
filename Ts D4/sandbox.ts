// Dynamic (any)

let age: any = 25 

// let age: any
// age = 25

// both are the same way of declaring.

age = true
console.log(age) // check browser console

// age can be any thing string, number, boolean, objects etc.

let mixed: any[] = []
mixed.push(5)
mixed.push('ryu')
mixed.push(true)

let object: { name: any, age: any};
object = { name: 25, age: "Ali"}
console.log(object) // check browser console