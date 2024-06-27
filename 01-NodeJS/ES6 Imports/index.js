import greet from "./greet.js";
import { person1, person2, person3 } from "./peoples.js";

// console.log(__filename);
// console.log(__dirname); // we dont have access to these two because of type:"module" es6 js
greet(person3);
greet("Ajay");
greet(person2);
greet(person1);
