const user = {
    firstName: "Tausif",
    class: "1st",
    age: 42,
    isGrad: "Yes",
}

// Imaging that use we are fetching user data
// so it will come late then

console.log(user.age); // will show undefined 
// because we didn't get the value

// So what to do
// Two methods 

// 1. check it if statemtn
if (user.age) {
    console.log(user.age);
    
}

// 2. do optional chaining
// means if first part is truthy 
// then then will check the 2nd part 
// and will console it  
console.log(user.age && user.age);
// Btw it won't it console two times ?
// Learn about Logical operators:
// In short for && operator
// It wil check first one ? truthy value ? ok
// Check 2nd truthy value ok 
// Both truthy then cosole last one  

// So how many times and which one will print ?
// user.age
console.log(user.isGrad && user.age);

// user.Grad cause firstly found user.Grad
// What if user.Grad: false
// then will user.age
console.log(user.isGrad || user.age);
  