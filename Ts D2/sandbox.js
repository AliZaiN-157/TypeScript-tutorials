// arrays 
var names = ['ali', 'raza', 'hassan'];
names.push('bashir');
// names.push(2)  Type changing error
// names[0] = 3  Type changing error
var numbers = [10, 20, 30, 50];
numbers.push(25);
// numbers.push('shaun'); 
// numbers[1] = 'shaun'
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
    name: 'ninja',
    belt: 'black',
    age: 30
};
ninja.age = 40;
// ninja.age = '30' Error [age is number in object not a string]
ninja.name = 'ryu';
// ninja.skills = ['kick','punch'] Error [skills array doesn't exits in the ninja object] 
// Yes we can overwrite it but any missing variable will cause an error similarly any new variable will also.
ninja = {
    name: 'ali',
    belt: 'orange',
    // age: 36, variable is missing ignore the other age you will see an error
    age: 40
};
