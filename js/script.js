//hello world in javascript
alert("hello");
alert("i am using a javascript");
//code structure
alert(
    1+
    3
    +2
);
//code structure
alert("hello");

[1,2].forEach(alert);

/* what is array ?
An array is special variable which 
can hold more than one value at a time.
*/
//declaring an array
const cars=["Thar","Ferrari","BMW"];
alert(cars);
//creating an array and providing an element
const arr=[];
arr[0]="Thar";
arr[1]="ferrari";
arr[2]="bmw";
alert(arr[0]);
//creating an array using new keyword
const car= new Array("ferrari","bmw","thar");
alert(car);

/*
What is object ?
object is used to store keyed collections of various data and more complex entities.
An object can be created using {} with optional list of properties.
A property is a "key:value" , where key is string and value can be anything.
*/
//creating a object
let user = new Object();//object constructor syntax
let user1 ={}; //object literal syntax

const triangle ={
    base:30,
    height:44
}
console.log(triangle);