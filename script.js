// Question no 1:-
let myobj = {};
let student = {
name: 'mueed',
age: 18 ,
profession: "programing"
}
// Question no 2:-
console.log(Object.values(student));
student.name = "zafar"
student.age = 20
student.profession = "software engireing"
student.location = "Jaranwala"
console.log(student);
// Question no 3:-
const myobje = {
    message : "hello world"
};
console.log(myobje.message);
let myobject ={
    with: 5,
    height: 10,
    calclueArea: function(){
        return this.with  * this.height;
    }  
};
console.log(myobject.calclueArea());

//  Question no 4:-
const person ={
    name : "mueed",
    age: 19,
    gerend: "Male",
    city : "jaranwala"
}
for (let key in person){
if (person.hasOwnProperty(key)){
    console.log(person[key]);
}
}

const myObject = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
  };
  
 
  for (let propName in myObject) {
    
    if (myObject.hasOwnProperty(propName)) {
      
      console.log(`Property name: ${propName}, Value: ${myObject[propName]}`);
      
    }
  }
  // Question no 5
  let obj1 = { a: 1 };
  let obj2 = { a: 1 };
  let obj3 = obj1;
  
  console.log(obj1 === obj2);
  console.log(obj1 === obj3); 

  function areSameObject(obj1, obj2) {
    return obj1 === obj2;
}

let objA = { a: 1 };
let objB = { a: 1 };
let objC = objA;

console.log(areSameObject(objA, objB));
console.log(areSameObject(objA, objC)); 
//  Question no 6:-
let person1 = {
  namee:"mueed",
  age:18,
  address:{
    street: "123 main st",
    city : "jaranwala",
    country:{
     name: "pakistan",
     postalcode:37250
    }
  },
  hobbies:["reading","coding"]

};
console.log("street",person1.address.street);
console.log("city",person1.address.city);

person1.address.street="5 main str";
person1.address.city="faislabad";
console.log(person1.address.street);
console.log(person1.address.city);

// Question No 7:-

// function person (name,age){
//   this.name =name;
//   this.age= age;
// }
// let person1 = new person("mueed",18);
// let person2 = new person("zafar",30);
// person.prototype.greet = function(){
//   console.log(`Hello, my name is ${this.name} and I am ${this.age}year old.`);
// }
  
// person1.greet();
// person2.greet();

// Question no 8:-
const myObject1 = {
  name: "Mueed",
  age: 18,
  isStudent: false,
  courses: ["Math", "Science"],
  address: {
    street: "123 Main St",
    city: "jaranwala"
  }
};

const jsonString = JSON.stringify(myObject1);
console.log("JSON String:", jsonString);

const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// Question no 9:-
const book = {
  title : 'the great gastsby',
  author : 'F. scott fitizagerald',
  yearapublish : 1925,
  genre: 'novel',
  ratings:{
    critics:9.4,
    readers:8.7
  }
}

const {title , author, ratings } = book;
console.log(title);
console.log(author);
console.log(ratings);

// Question no 10:-
const Book = {
  title:'the great english',
  author: 'f. scoot',
  yearapublish: 2020,
  genre:'book'
};
const propertyNames = Object.keys(Book);
console.log(propertyNames);

// Question no 11:-

