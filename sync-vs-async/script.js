
// Firstly  js is one threaded language basically means 
// do work one at a time 
// Let's suppose we fetch api data from server then it will take time 
// ab jo time laga usme js kya karega ? shaant rahega ?agar haa to browser
// freeze ho jaayega and won't work 
// so what to do kyuki usko rukwana to hai hi nahi to 
// browser freeze ho jaayga(BTW browser q freeze hoga qki js runs on browser(chrome's V8 engine))


// there are two ways write code 
// 1. sync code: execute line by line with a time  
const name = "Tausif" // sync code 


// Async Code: Won't execute line by line 
// Example: will execute after 5 seconds then 

setTimeout(() => {
    console.log("Hello");
}, 5000);
// If it's executing after 5 seconds then will 
// time variable wait for setTimeout for executing naah  
// why ? cause otherwise borwser will be freeze 
// So what it to do? 
// Take a deep break and firstly learn these things
// What is browser ? A software by which we 
// interact with servers through https protcol

// Browser contains: 
// 1. JS engine(example V8 for chrome)
// 2. Web APIs(example setTimeout,setInterval DOM APIs, Fetch )
// What ? That does something: setTimeout execute code after certain seconds 
// 3. Rendering Engine:
// Why? A rendering engine for converting code(HTML, CSS,JS) into 
// visual elements that you see on browser
// For example ? Blink rendering engine
// 4.Networking system
// 5. Threads system

// so this web API is  written in c++(C++ can handle multiple threads) 
// But this JS can only handle one thread 




//  JS engine will send setTimeout to web APIs through event loop 

// Then chunki web APIs is written in c++ so manage multiple threads
// and will handle this thread for 5 seconds in mean time js engine will keep
//  executing other codes when the time is over then Web API  
// will send setTimeout to JS engine for executing 
// then it will execute and
const time = "Time"

// I've question
// Firstly browser is written in C++ so C++ 
// web apis and other things also written in C++ right ? Yeah
// so javascript ko multi threaded hona chahiye qki JS engine 
// to multi thread support krta hai then why not ? Cause JS has a rule 
// says to JS engine that execute my code line by line single threaded 
// even though you support multi threaded   

// For example: 
// Tera CPU 8-core hai ➡️ Multithread support krta hai 

// Par tu Cricket khel raha hai, jisme rule hai:
// ➡️ "Ek time pe ek hi banda batting karega." 🏏
// ➡️ Chahe ground pe 11 players hain, par batting single thread 
// (batsman) ke rule pe chalega.

// So we have understood why does js supports
//  single threaded even thought it
//  has multi threaded support engine

// Now think Think of a scenerio
// if it's need to take time to execute then it will take time
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