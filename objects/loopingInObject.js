let courses = {
  firstName : "sahil",
  lastName : "kumar",
  age: 21,
  dob: '08/02/1989',
}

for(let x in object) {
  console.log(x);
}
courses.values.forEach(v => {
  console.log(v);
});