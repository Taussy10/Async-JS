// promise is a special type of object 
// let me tell you that you can't use most of 
// object props in promise such as destructure , spread and many more
//  it's main objective to do work asynnchrnously 
// get the value by one method , store it then use however you want 

// How to intiate promise ?
// firstly , it's not a function it's a vriable
// you have to pass callback 
const a = new Promise(() => {})
// this promise will always pending cause we didn't resloved , or reject
// you get three objects ? 
// 1. Prototype: 
// 2. PromiseState(state of the promise ? can be pending , fullfilled/resolved and reject)
// 2. PromiseResult(Result of promise)



//  you can reslove or reject the promise pending by defalt or it's taking 
// too much time to get data
// we stored promise in a1 variable
const a1 = new Promise((resolve , reject ) => {
    // resolve("resolve hai bhai")
    // reject("reject hai bhai")
 
})


// there is better way to handle( promsie , reject) promise:
//  by then method use for resolving promise
// catch method is for catching catching erros then throw the error 
// by rejecting promise 


// then method is is promise object's method that  takes params
//  nameed as  res / reslove whatever you want to name it 
// basically it's promiseResult data( handles successful resolution)
// but why did we use callback ?  callback ensures that the code inside it 
// executes only when the promise settles. 
a1.then((reslove)=> {
   console.log("resolve hai bhai then method :", reslove);
   
    
}).catch((error) =>{
   console.log( "reject" ,error );
//    it takes error params for consoling the error: and error is PromiseResult
    
}
    
).finally(()=> {
 console.log("it will execute after either then or cat method");
 
})













// 3rd method 
// 1. To create promise 
// 2. to resolve promise or reject promise  
 
// to create promise use async keyword on function
// it will be always fullfilled by default

const b = async() => {
    // await is use for resolving promise
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
    const data = response.json()
    console.log("Data :",data);
    
    // Now if you want to reject promise in case
    // Btw this is not ideal method cause firstly 
    // it will resolve promise then reject: if 
    // you want to try galat url daal de then only reject hoga 
     
    // so wrap them in try catch block like in c function
    throw new Error("error")
}

// // do it by trycatch for rejecting promise
// professional way of writing code
// if promise fullfilled the execute try block else execute catch block
// and reject the promise

const c = async() => {
    try {
          
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
    const data = response.json()
    console.log("Data :",data);

    } catch (error) {
        throw new Error("error")
    }
  
    
}
