const fetch1 = async() => {
    try {
          
    const request = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
    // When we request to server by using fetch method 
    // then server response we respone object and the data in  
    // not the data(Btw data is in  body key which readable stream(Binary code))

    console.log("Request :",request);
// Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos/1', redirected: false, status: 200, ok: true, …}
// body: ReadableStream
// bodyUsed: false
// headers: Headers {}
// ok: true
// redirected: false
// status: 200
// statusText: ""
// type: "cors"
// url: "https://jsonplaceholder.typicode.com/todos/1"


    // so if we want to respone the use a method to get data from response object
    const data = await request.json()
    console.log("Data :",data);

    } catch (error) {
    console.log(error);
    
        throw new Error("error")
    }
  
    
}
