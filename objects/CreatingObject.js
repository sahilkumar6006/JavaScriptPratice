// const person = new Object({
//   name: 'sahil',
//   age: 20, 
//   hobbies: ['reading', 'games', 'codin'],
//   greet: function() {
//     console.log('Hello everyone');
//   },
//   score: {
//     maths: 90,
//     science: 80
//   }
// })

// console.log(typeof person);

// //acessing the value of the object
// console.log(person.name);
// console.log(person.hobbies);
// person.greet();
// console.log(person.score.maths);

// //delete a property from an object
// delete person.greet;

// //object keys
// const keys = Object.keys(person);
// console.log(keys);

// //object entries
// const entries = Object.entries(person);
// console.log(entries);

// //object values
// const values = Object.values(person);
// console.log(values)


//spread operator and objects
const defaults = {color: 'blue', weight: '100kg'};
const custom = {weight: '200kg' , sound: 'loud'};

const merged = {...defaults , ...custom};
console.log(merged);

for(let x in defaults) {
  console.log(x, defaults[x])
}