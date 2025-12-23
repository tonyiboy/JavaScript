// PRACTICING OBJECTS

// practice 1

// let user = {} // object literal 

// let otherUser = new Object() // object constructor

// console.log(user);
// console.log(otherUser);

// practice 2

// let user = {     // an object
//   name: "Johm",  // key "name" stores value John
//   age : 30       // key "age" stores value 30
// }

// console.log(user.name);
// console.log(user.age);
// user.admin = true
// console.log(user);
// delete user.admin
// console.log(user);

// practice 3 

// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true, // multiword property name must be quoted
// }

// console.log(user);

// practice 4

// let user = {}

// //set
// user["likes birds"] = true

// //get
// console.log(user["likes birds"]);

// // delete
// delete user["likes birds"]
// console.log(user);

// practice 5

// let user = {}

// let key = "likes birds"
// user[key] = true

// console.log(user);

// practice 6

// let user = {
//   name: "John",
//   age: 30,
// }

// let key = prompt("what is your name", "name")

// // access by variable
// alert(user[key])

// practice 7

// let fruit = prompt("what is your favorite fruit")

// let bag = {
//   [fruit]: 5
// }

// console.log(bag);

//practice 8

// let fruit = prompt("what is your favorite fruit")

// let bag = {
//   //computed propertys that uses complex expressions inside square brackets
//   [fruit + " is the best"]: 5,
// }

// console.log(bag);

// practice 9

//property value shorthand
// function makeUser(name,age) {
//   return {
//     name,
//     age,
//   }
// }

// let user = makeUser("Johnny",30)

// console.log(user);

// practice 10

// let user = {
//     "first": "Johny",
//     last: "bravo",
//     for: "yo"
// }

// console.log(user);

// practice 11
// property existence test in operator
// let user = {
//     name: "johhny",
//     // age: undefined
// }

// if (user.age === undefined) {
//     console.log("no property and value"); 
// }

// let variation = "age"

// console.log(variation in user);


// console.log(user.age);

// practice 12

// let user = {}
// let user2 = user

// console.log(user === user2);

// practice 13
// cloning object 1 option
// let user = {
//     name: "john",
//     age: 30
// }

// let clone = {}

// for (let key in user) {
//     console.log(key);
    
//     clone[key] = user[key]
// }

// console.log(user === clone);

// cloning object 2 option
// Object.assign(clone, user)
// console.log(clone);
// console.log(user === clone);

// practice 14

// let user = {
//     name: "johny",
//     age: 30,
//     size: {
//         my: 20,
//         yours: 30,
//     }
// }

// let clone = {}

// Object.assign(clone, user)

// delete clone.size.my
// delete clone.size.yours


// console.log(user);

// practice 15 

// let user = {
//     name: "johny",
//     age: 30,
//     size: {
//         my: 20,
//         yours: 30,
//     }
// }

// console.log(user);


// let clone = structuredClone(user)
// delete clone.size.my
// console.log(clone);


// practice 16

// let user = {
//     name: "john",
//     age: 30,

//     sayHi() {
//         console.log(this.name);
        
//     }
// }

// let clone = {}

// Object.assign(clone, user)

// clone.name = "ana"
// console.log(clone);


// clone.sayHi()

// user.sayHi()

// practice 17

// function User(name) {
//     this.name = name;
//     this.isAdmin = false
// }

// let user = new User("Johny")
// let user2 = new User("ana")

// console.log(user);
// console.log(user2);

// practice 18

let user = new function() {
    this.name = "john";
    this.isAdmin = false
}

console.log(user);



































