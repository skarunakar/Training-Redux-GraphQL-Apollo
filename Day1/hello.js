console.log("Hello");

let now = () => {
    console.log(new Date().toString())
};
now();
const arr1=[1,2], arr2=[3,4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
const person = {
    name: "Bob",
    age: "20"
};
const {name, age} = person;
console.log( {name, age});
let person2 = Object.assign(person);
console.log(person2);
person2.name= "Sam";
console.log(person2);