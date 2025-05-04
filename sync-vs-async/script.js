

// there are two ways write code 
// 1. sync: basic level working borwser
const name = "Tausif" // sync code 

// What if we work with diff server: they can do things   
// Question1: what if they send data late ?
// Question2: what if they don't send data basically show error ?

// For first 
// 1. using async await keyword for waiting to data come  
// btw await means to wait 
// If data didn't sent the it will keep waiting 

// 2. by using async await keyword it returns promises
// (Vada that data will be send it may take time but will be send)

// // by default these promises are fullfilled
// then how to reject the promise
// throw new Error("write message")
// Error is just a function that takes some params

// throw keyword is use for thorwing things and will not let 
// execute other codes below it's just like return
// write anyting front of it then it will throw that thing

// Ansering question2: use try catch block if it's throws error





const fun2 = async() => {
    // Try catch for error handling 
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
    const data = response.json()
    return data
} catch (error) {
   console.log("Error :",error);
   throw new Error("Error while fetching data")
}
}
// const result = fun2()
// console.log("Result :",result);



// one more thing about async function that it isn't executed by js main
// thread cause if it's executed by main thread then the website/app will 
// be freeze not work if promise takes too much time to resolve A thread is 
// created for executing it