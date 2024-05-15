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

