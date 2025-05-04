// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   // You will get response headr then convert in JS object
//   .then((response) => response.json())
//   .then((json) => console.log("API :", json));

//   console.log(XMLHttpRequest);
  
// Before these fetch we had XHR function to get send data how ?
// Just a functionthat use to transmit data 


// you have to use new keyword with this function for some reason
const xhr = new XMLHttpRequest()



// setting the request method
const data = xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1")
// This for intiating the request
const data1 = xhr.send()

// You wont' get any data
// For getting add a event listener like button 
function reqListener() {
    console.log("Response : ",this.responseText);
  }
  

  xhr.addEventListener("load", reqListener);