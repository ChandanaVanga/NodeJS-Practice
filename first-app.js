//1)// const fs = require('fs');

// fs.writeFileSync('hello.txt', 'Hello from Node.js');



//2)// var name = "Chandana";
    // console.log(name);



//3)// var name = "Chandana";
// var age = 21;
// var hasHobbies = true;

// function aboutUser(userName, userAge, userHasHobbies) {
//     return (
//         'Name is ' + userName + ',age is ' + userAge + ' and the user has hobbies:'+ userHasHobbies
//     );
// }

// console.log(aboutUser(name, age, hasHobbies));



//4)
//  var name = "Chandana";
// let age = 21;
//  var hasHobbies = true;

//  age = 22;

// function aboutUser(name, age, hasHobbies) {
//     return (
//         'Name is ' + name + ',age is ' + age + ' and the user has hobbies:' + hasHobbies 
//     );
// }

// console.log(aboutUser(name, age, hasHobbies));


//5)
// var name = "Chandana";
// let age = 21;
//  var hasHobbies = true;

//  age = 22;

// const aboutUser = function(name, age, hasHobbies) {
//     return (
//         'Name is ' + name + ',age is ' + age + ' and the user has hobbies:' + hasHobbies 
//     );
// }

// console.log(aboutUser(name, age, hasHobbies));


//6)
// const person = {
//     name: 'Chandana',
//     greet() {
//         console.log('Hi, I am ' + this.name);
//     }
// };

// person.greet();


//7)
// const hobbies = ['Sports', 'Eating'];
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// console.log(hobbies.map(hobby => 'Hobby:' + hobby));
// console.log(hobbies);


//8)
// const hobbies = ['Sports', 'Eating'];
// hobbies.push('Programming');
// console.log(hobbies);


// //9)

// const hobbies = ['Sports', 'Eating'];
// const copiedArray = [...hobbies];
// console.log(copiedArray);



//10)
// const person = {
//         name: 'Chandana',
//         greet() {
//             console.log('Hi, I am ' + this.name);
//         }
// };
// //person.greet();
// const copiedPesrson = {...person};
// console.log(copiedPesrson);