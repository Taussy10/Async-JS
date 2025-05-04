// We can write code for two things using JS in context of web development
// 1. For browser: basic JS(loops, data types) and DOM related things
// 2. What if we want to interact with servers(A place where data is stored)
// for data sending and recieving  So, how to interact with servers

// When we search something on google then a request is send to google's server 
// then server sends the data and we see pages links
// you can see in chrome dev tools's Network tab by refreshing it
// What's request: Electro maganetic signals that tells to do something  

// JSON: JS Object Notation: A lightweight human readable TEXT based(string) data interchange format
// 1. even keys can be written in quotes and value same as js objects(if num then num) 
// if you use ,(comma) then write another key and value 

// WHy ? 
// 1. For storing data 
// 2. Transmitting data from server to client to server 

// Note: it's not language independent

// There ar two ways 
// 1. data.json() will convert data in JS object(useful for API fetching)
// 1. data.json() will convert JSON in JS Object (useful if data is already in JSON: AI realated work)

fetch('https://jsonplaceholder.typicode.com/todos/1',)
// You will get response headr then convert in JS object
      .then(response => response.json())
      .then(json => console.log("API :",typeof json))




      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
    //   We get parsed json so converted it in stringify for fun
      .then(json => console.log(JSON.stringify(json)))

      const user1 = {
        "name": "Tausif",
        "age": 41,
        "class": "2nd",
        "contacts": {
          "email": "hello@gmail.com"
        },
        "hobbies": ["Swimming", "Chess"],
        "isGrad": false
      }

    //   console.log("User :",typeof JSON.parse(JSON.stringify(user)));
      console.log("User1 :",typeof JSON.stringify(user1));
      
const User2 = '{"name":"John", "age":30, "city":"New York"}'
console.log("User2 :",typeof JSON.parse(User2));

// So there are two kinda json 
// 1. Objectified JSON(aka Parsed JSON): For example:  user1 , Firstly they can be use in map method 
// and For some reason you wan to create it in strings then use
// JSON.stringfy() method   

// 2. Stringify JSON(aka JSON String): For example:  user2 , then you can't use in your app so 
// need to convert them by JSON.parse() method then they will be 
// converted in JS object then can be use in map method  

// Then fir json() kya hai ? It's a method for parsing(converting in object)
//  a Response or Request object's body in JSON(Why? cause request body 
// we don't want and sometimes they are not human readable so convert
//  them in JS object )
//  It returns a Promise of that JSON 

// SO does two things 
// 1. Converting request/response header into Objectified JSON 
// basically parsing the JSON
// 3. then returns promse of that data 

