const input = document.querySelector("#username")

// console.log(input);
// input.addEventListener('click', () => {
//     console.log("Hello, I'm input ");
    
// })

// you cann use onClick event but there more input events 
// for working inputs
// 1. input event 
input.addEventListener('input', (event) => {
    console.log('input event fired');
    console.log(event);
   const tar = event.target
   console.log("tar: jj", tar.value);
   
   
    
    
})

// how can we get data from input 
// 1. input gives an event object that can be accepted via parms in funciton
// 2. inside the event object there is key named as "target" it's also a object  (target is use for targeting the input )
// 3. and inside the target we have a key named as "value" (for getting value from input ) 
// 




